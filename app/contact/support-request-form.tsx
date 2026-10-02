"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const fieldClass =
  "min-h-12 w-full rounded-full border border-white/[0.06] bg-[#313441] px-4 text-sm text-[#e0e1f2] placeholder:text-[#968da1] focus:border-[#8b3dff] focus:ring-2 focus:ring-[#8b3dff]/30";

export default function SupportRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const device = String(data.get("device") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    const message = [
      "Hello Golden IPTV, I would like support.",
      "",
      `Name: ${name}`,
      `Device: ${device}`,
      `Topic: ${topic}`,
      `Details: ${notes}`,
    ].join("\n");

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-xs font-semibold uppercase tracking-wider text-[#cdc2d8]">
          <span>Your name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </label>
        <label className="space-y-1.5 text-xs font-semibold uppercase tracking-wider text-[#cdc2d8]">
          <span>Device</span>
          <select name="device" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a device
            </option>
            {DEVICES.map((device) => (
              <option key={device.name} value={device.name}>
                {device.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-[#cdc2d8]">
        <span>Support topic</span>
        <select name="topic" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a topic
          </option>
          <option value="Device setup">Device setup</option>
          <option value="Free trial">Free trial</option>
          <option value="Subscription plan">Subscription plan</option>
          <option value="Playback or buffering">Playback or buffering</option>
          <option value="Other question">Other question</option>
        </select>
      </label>

      <label className="block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-[#cdc2d8]">
        <span>Details</span>
        <textarea
          name="notes"
          rows={5}
          required
          placeholder="Describe what you need help with."
          className="w-full rounded-2xl border border-white/[0.06] bg-[#313441] px-4 py-3 text-sm text-[#e0e1f2] placeholder:text-[#968da1] focus:border-[#8b3dff] focus:ring-2 focus:ring-[#8b3dff]/30"
        />
      </label>

      <p className="text-xs leading-5 text-[#cdc2d8]">
        By continuing, the details you entered will be prepared for sending
        through WhatsApp so Golden IPTV can handle your support request. See our{" "}
        <Link
          href="/privacy/"
          className="font-semibold text-[#afc6ff] hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        className="ui-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8b3dff] to-[#046ef1] px-6 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,61,255,0.35)]"
      >
        <MessageCircle className="h-4 w-4" />
        Prepare WhatsApp Support Request
        <ArrowRight className="h-4 w-4" />
      </button>

      {submitted && (
        <p role="status" className="rounded-2xl bg-[#25D366]/10 p-4 text-sm text-[#e0e1f2]">
          Your support details were prepared in WhatsApp. Send the message there
          to contact Golden IPTV.
        </p>
      )}
    </form>
  );
}
