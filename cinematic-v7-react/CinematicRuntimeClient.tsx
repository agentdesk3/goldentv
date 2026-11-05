"use client";

import { useEffect } from 'react';
import { createCinematicRuntime } from '../cinematic-v7/runtime.mjs';
import { loadCinematicDependencies } from './load-dependencies';

export const defaultServices = {
  loadDependencies: loadCinematicDependencies,
  createRuntime: createCinematicRuntime,
};
// Effect claims contain no runtime instances and are released on every exit.
const claims = new WeakMap<Element, AbortController>();

export type CinematicRuntimeClientProps = {
  rootId?: string;
  onError?: (error: Error) => void;
  // Stable injectable services let the isolated harness observe real instances.
  services?: typeof defaultServices;
};

/** Sibling to the existing Server Component: owns effects and renders no HTML. */
export default function CinematicRuntimeClient({
  rootId = 'cinematic-home', onError, services = defaultServices,
}: CinematicRuntimeClientProps) {
  useEffect(() => {
    const controller = new AbortController();
    let instance: ReturnType<typeof createCinematicRuntime> | undefined;
    let claimedRoot: Element | undefined;
    const release = () => {
      if (claimedRoot && claims.get(claimedRoot) === controller) claims.delete(claimedRoot);
    };
    const report = (cause: unknown) => {
      const error = cause instanceof Error ? cause : new Error(String(cause));
      if (onError) onError(error); else console.error('Cinematic V7 initialization failed:', error);
    };
    async function initialize() {
      try {
        const root = document.getElementById(rootId);
        if (!root?.isConnected) throw new Error(`Cinematic root not found: ${rootId}`);
        if (claims.has(root)) throw new Error(`Cinematic root already has an owner: ${rootId}`);
        claims.set(root, controller); claimedRoot = root;
        const dependencies = await services.loadDependencies(root.ownerDocument, controller.signal);
        if (controller.signal.aborted || !root.isConnected || document.getElementById(rootId) !== root) { release(); return; }
        instance = services.createRuntime({ root, ...dependencies });
        instance.mount();
      } catch (error) {
        const failed = instance; instance = undefined;
        failed?.destroy();
        release();
        if (!controller.signal.aborted) report(error);
      }
    }
    void initialize();
    return () => {
      controller.abort();
      const owned = instance; instance = undefined;
      owned?.destroy();
      release();
    };
  }, [rootId, services, onError]);
  return null;
}
