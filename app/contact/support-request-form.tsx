"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import { trackWhatsAppClick } from "@/app/components/google-analytics";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const fieldClass = `block min-h-12 w-full min-w-0 max-w-full rounded-md border border-white/25 bg-[#100E0E] px-4 py-3 text-base font-normal text-[#EEEBDD] placeholder:text-[#A6A0A5] focus:border-[#EEEBDD] ${focusStyle}`;

export default function SupportRequestForm() {
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
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

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    setPreparedUrl(url);
    trackWhatsAppClick(
      "support_request_form",
      "Prepare WhatsApp Support Request",
    );
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // Keep the prepared link available if the browser cannot open a new tab.
    }
  }

  return (
    <form onSubmit={handleSubmit} onChange={() => setPreparedUrl(null)} aria-label="Prepare a support request" className="min-w-0 space-y-6">
      <p className="text-xs leading-6 text-[#BDBDC5]">All fields are required. Your message is prepared here and sent by you in WhatsApp.</p>
      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label htmlFor="support-name" className="min-w-0 space-y-2 text-sm font-semibold">
          <span className="block">Your name</span>
          <input id="support-name" name="name" type="text" required maxLength={120} autoComplete="name" placeholder="Your full name" className={fieldClass} />
        </label>
        <label htmlFor="support-device" className="min-w-0 space-y-2 text-sm font-semibold">
          <span className="block">Device</span>
          <select id="support-device" name="device" required defaultValue="" className={`${fieldClass} [color-scheme:dark]`}>
            <option value="" disabled>Select a device</option>
            {DEVICES.map((device) => (
              <option key={device.href} value={device.name}>{device.name}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <label htmlFor="support-topic" className="block space-y-2 text-sm font-semibold">
        <span className="block">Support topic</span>
        <select id="support-topic" name="topic" required defaultValue="" className={`${fieldClass} [color-scheme:dark]`}>
          <option value="" disabled>Select a topic</option>
          <option value="Device setup">Device setup</option>
          <option value="Free trial">Free trial</option>
          <option value="Subscription plan">Subscription plan</option>
          <option value="Playback or buffering">Playback or buffering</option>
          <option value="Other question">Other question</option>
        </select>
      </label>
      <label htmlFor="support-notes" className="block space-y-2 text-sm font-semibold">
        <span className="block">Details</span>
        <textarea id="support-notes" name="notes" rows={6} required maxLength={2000} aria-describedby="support-details-help" placeholder="Tell us what you were trying to do, your device model and any error message you see." className={`${fieldClass} resize-y`} />
        <span id="support-details-help" className="block text-xs font-normal leading-6 text-[#BDBDC5]">Up to 2,000 characters. Keep passwords and private login details out of your message.</span>
      </label>
      <div className="border-t border-white/15 pt-6">
        <p className="text-xs leading-6 text-[#BDBDC5]">
          Your details will be prepared for sending through WhatsApp so Golden IPTV can handle your support request. You can review them before sending. See our{" "}
          <Link href="/privacy/" className={`font-semibold text-[#EEEBDD] underline underline-offset-4 ${focusStyle}`}>Privacy Policy</Link>.
        </p>
        <button type="submit" className={`mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#CE1212] px-4 py-4 text-sm font-bold leading-6 text-white transition-colors hover:bg-[#a90e0e] motion-reduce:transition-none ${focusStyle}`}>
          <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
          Prepare WhatsApp Support Request
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </button>
        <p className="mt-3 text-center text-xs leading-6 text-[#BDBDC5]">Opens WhatsApp in a new tab. Press <strong className="text-[#EEEBDD]">Send</strong> there to contact our team.</p>
        <div role="status" aria-live="polite" aria-atomic="true">
          {preparedUrl && (
            <p className="mt-5 border-l-2 border-[#CE1212] bg-black/30 p-4 text-sm leading-7 text-[#EEEBDD]">
              Your message is ready to review. Press <strong>Send</strong> in WhatsApp to finish; this form does not send it for you. If WhatsApp didn’t open,{" "}
              <a href={preparedUrl} target="_blank" rel="noopener noreferrer" data-analytics-location="support_request_form_fallback" className={`font-bold underline underline-offset-4 ${focusStyle}`}>open your prepared request here<span className="sr-only"> (opens in a new tab)</span></a>.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
