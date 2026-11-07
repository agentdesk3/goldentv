"use client";

import { ArrowUpRight, MessageCircle, Monitor } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import { trackWhatsAppClick } from "@/app/components/google-analytics";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const fieldClass = `block min-h-12 w-full min-w-0 max-w-full rounded-md border border-white/25 bg-[#100E0E] px-4 py-3 text-base font-normal text-[#EEEBDD] placeholder:text-[#99949A] focus:border-[#EEEBDD] ${focusStyle}`;
const devices = [...DEVICES, { name: "Other", href: "", description: "Tell us your model in the notes so we can check compatibility." }];

export default function TrialRequestForm() {
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const device = String(formData.get("device") || "").trim();
    const trialStartTime = String(formData.get("trialStartTime") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hello Golden IPTV, I would like to request a 24-hour free trial.",
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `WhatsApp Number: ${whatsapp}`,
      `Device: ${device}`,
      trialStartTime
        ? `Preferred Trial Start Time: ${trialStartTime}`
        : "Preferred Trial Start Time: Not specified",
      message ? `Message / Notes: ${message}` : "",
    ].filter(Boolean).join("\n");

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`;
    setPreparedUrl(url);
    trackWhatsAppClick("free_trial_request_form", "Continue Trial Request on WhatsApp");
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // The prepared link remains available even when opening a tab fails.
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setPreparedUrl(null)}
      aria-label="24-hour free trial request"
      className="min-w-0 space-y-8 rounded-lg border border-white/20 bg-[#1B1616] p-5 sm:p-8"
    >
      <fieldset className="min-w-0">
        <legend className="w-full border-b border-white/15 pb-5">
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#BDBDC5]">Step 1 of 2</span>
          <span className="mt-2 block font-heading text-2xl font-semibold text-[#EEEBDD]">Choose your screen.</span>
        </legend>
        <p id="trial-device-help" className="my-5 text-sm leading-7 text-[#BDBDC5]">Select your device. If you’re unsure, choose Other and share the model in your notes.</p>
        <div className="grid gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3">
          {devices.map((device) => (
            <label key={device.name} className="relative min-w-0 cursor-pointer">
              <input
                type="radio"
                name="device"
                value={device.name}
                required
                aria-describedby="trial-device-help"
                className="peer absolute right-4 top-4 z-10 h-4 w-4 cursor-pointer accent-[#CE1212] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none"
              />
              <span className="flex h-full min-h-32 flex-col justify-between gap-4 rounded-md border border-white/25 bg-[#100E0E] p-4 pr-10 text-[#EEEBDD] transition-colors hover:border-white/60 peer-checked:border-[#CE1212] peer-checked:bg-[#361718] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#EEEBDD] motion-reduce:transition-none">
                <Monitor aria-hidden="true" className="h-5 w-5 shrink-0 text-[#BDBDC5]" />
                <span className="text-sm font-semibold leading-6">{device.name}</span>
              </span>
            </label>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 text-[#BDBDC5]">Compatibility varies by model and playback app. Our team will confirm the appropriate setup.</p>
      </fieldset>

      <fieldset className="min-w-0">
        <legend className="w-full border-b border-white/15 pb-5">
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#BDBDC5]">Step 2 of 2</span>
          <span className="mt-2 block font-heading text-2xl font-semibold text-[#EEEBDD]">Make it your trial.</span>
        </legend>
        <p className="my-5 text-sm leading-7 text-[#BDBDC5]">Add your details, then continue to WhatsApp. Fields marked * are required.</p>
        <div className="grid min-w-0 gap-5 sm:grid-cols-2">
          <label htmlFor="fullName" className="min-w-0 space-y-2 text-sm font-semibold text-[#EEEBDD]">
            <span className="block">Full name *</span>
            <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
          </label>
          <label htmlFor="email" className="min-w-0 space-y-2 text-sm font-semibold text-[#EEEBDD]">
            <span className="block">Email address *</span>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="name@example.com" className={fieldClass} />
          </label>
          <label htmlFor="whatsapp" className="min-w-0 space-y-2 text-sm font-semibold text-[#EEEBDD]">
            <span className="block">WhatsApp number *</span>
            <input id="whatsapp" name="whatsapp" type="tel" required autoComplete="tel" placeholder="+27…" aria-describedby="trial-phone-help" className={fieldClass} />
            <span id="trial-phone-help" className="block text-xs font-normal leading-6 text-[#BDBDC5]">Include your country code.</span>
          </label>
          <label htmlFor="trialStartTime" className="min-w-0 space-y-2 text-sm font-semibold text-[#EEEBDD]">
            <span className="block">Preferred start time <span className="font-normal text-[#BDBDC5]">(optional)</span></span>
            <input id="trialStartTime" name="trialStartTime" type="datetime-local" aria-describedby="trial-time-help" className={`${fieldClass} [color-scheme:dark]`} />
            <span id="trial-time-help" className="block text-xs font-normal leading-6 text-[#BDBDC5]">Your local time. Our team will confirm availability.</span>
          </label>
        </div>
        <label htmlFor="message" className="mt-5 block space-y-2 text-sm font-semibold text-[#EEEBDD]">
          <span className="block">Message / notes <span className="font-normal text-[#BDBDC5]">(optional)</span></span>
          <textarea id="message" name="message" rows={3} placeholder="Your device model or a question about getting started." className={`${fieldClass} resize-y`} />
        </label>
      </fieldset>

      <div className="border-t border-white/15 pt-6">
        <p className="text-xs leading-6 text-[#BDBDC5]">
          Your details will be prepared for sending through WhatsApp so Golden IPTV can handle your trial request. Review the message before sending. See our{" "}
          <Link href="/privacy/" className={`font-semibold text-[#EEEBDD] underline underline-offset-4 ${focusStyle}`}>Privacy Policy</Link>.
        </p>
        <button type="submit" className={`mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#CE1212] px-4 py-4 text-sm font-bold leading-6 text-white transition-colors hover:bg-[#a90e0e] motion-reduce:transition-none ${focusStyle}`}>
          <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
          Continue Trial Request on WhatsApp
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </button>
        <p className="mt-3 text-center text-xs leading-6 text-[#BDBDC5]">Opens WhatsApp in a new tab. Press <strong className="text-[#EEEBDD]">Send</strong> there to finish. No trial payment required.</p>
        <div role="status" aria-live="polite" aria-atomic="true">
          {preparedUrl && (
            <p className="mt-5 border-l-2 border-[#CE1212] bg-black/30 p-4 text-sm leading-7 text-[#EEEBDD]">
              Your request is prepared, but has not been sent. Press <strong>Send</strong> in WhatsApp to complete it. If WhatsApp didn’t open,{" "}
              <a href={preparedUrl} target="_blank" rel="noopener noreferrer" data-analytics-location="free_trial_request_form_fallback" className={`font-bold underline underline-offset-4 ${focusStyle}`}>open your prepared request here<span className="sr-only"> (opens in a new tab)</span></a>.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
