"use client";

import { ArrowRight, CalendarClock, Mail, MessageCircle, Monitor } from "lucide-react";
import { useState } from "react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const fieldClass =
  "min-h-12 w-full rounded-full border border-white/[0.06] bg-[#0b0e19]/90 px-4 text-sm text-[#e0e1f2] placeholder:text-[#968da1] shadow-inner transition focus:border-[#8b3dff] focus:ring-2 focus:ring-[#8b3dff]/30";

export default function TrialRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const device = String(formData.get("device") || "").trim();
    const trialStartTime = String(
      formData.get("trialStartTime") || "",
    ).trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hello Golden IPTV, I would like to request a 24-hour free trial.",
      "",
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `WhatsApp Number: ${whatsapp}`,
      `Device: ${device}`,
      trialStartTime
        ? `Preferred Trial Start Time: ${trialStartTime}`
        : "Preferred Trial Start Time: Not specified",
      message ? `Message / Notes: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset className="rounded-[2rem] bg-[#181b27]/80 p-5 shadow-xl backdrop-blur-2xl sm:p-6">
        <legend className="sr-only">Select Your Hardware</legend>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#d4bbff]">
              Step 1 of 2
            </span>
            <h2 className="font-heading text-xl font-bold text-[#e0e1f2]">
              Select Your Hardware
            </h2>
          </div>
          <Monitor className="h-7 w-7 text-[#968da1]" />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[...DEVICES, { name: "Other", href: "", description: "Another compatible device." }].map(
            (device) => (
              <label key={device.name} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="device"
                  value={device.name}
                  required
                  className="peer sr-only"
                />
                <span className="flex min-h-24 flex-col items-start justify-center rounded-2xl border border-transparent bg-[#1c1f2b] p-4 text-left transition peer-checked:border-[#8b3dff]/70 peer-checked:bg-[#272936] peer-checked:shadow-[0_0_24px_rgba(139,61,255,0.3)] hover:bg-[#272936]">
                  <Monitor className="mb-2 h-5 w-5 text-[#afc6ff] peer-checked:text-[#d4bbff]" />
                  <strong className="text-sm text-[#e0e1f2]">{device.name}</strong>
                </span>
              </label>
            ),
          )}
        </div>
      </fieldset>

      <div className="rounded-[2rem] bg-[#181b27]/80 p-5 shadow-xl backdrop-blur-2xl sm:p-6">
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#afc6ff]">
            Step 2 of 2
          </span>
          <h2 className="font-heading text-xl font-bold text-[#e0e1f2]">
            Delivery Details
          </h2>
          <p className="mt-1 text-xs leading-5 text-[#cdc2d8]">
            Complete the details below, then send the prepared request in
            WhatsApp.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1.5 text-sm font-semibold text-[#e0e1f2]">
            <span>Full Name</span>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={fieldClass}
            />
          </label>

          <label className="space-y-1.5 text-sm font-semibold text-[#e0e1f2]">
            <span>Email Address</span>
            <span className="relative block">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#968da1]" />
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@example.com"
                className={`${fieldClass} pl-11`}
              />
            </span>
          </label>

          <label className="space-y-1.5 text-sm font-semibold text-[#e0e1f2]">
            <span>WhatsApp Number</span>
            <span className="relative block">
              <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#968da1]" />
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+27..."
                className={`${fieldClass} pl-11`}
              />
            </span>
          </label>

          <label className="space-y-1.5 text-sm font-semibold text-[#e0e1f2]">
            <span>Preferred Trial Start Time</span>
            <span className="relative block">
              <CalendarClock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#968da1]" />
              <input
                id="trialStartTime"
                name="trialStartTime"
                type="datetime-local"
                className={`${fieldClass} pl-11 [color-scheme:dark]`}
              />
            </span>
          </label>
        </div>

        <label className="mt-4 block space-y-1.5 text-sm font-semibold text-[#e0e1f2]">
          <span>Message / Notes</span>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Optional: share anything that would help with your trial request."
            className="w-full rounded-2xl border border-white/[0.06] bg-[#0b0e19]/90 px-4 py-3 text-sm text-[#e0e1f2] placeholder:text-[#968da1] shadow-inner transition focus:border-[#8b3dff] focus:ring-2 focus:ring-[#8b3dff]/30"
          />
        </label>

        <button
          type="submit"
          className="ui-button mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8b3dff] to-[#046ef1] px-6 text-sm font-bold text-white shadow-[0_0_28px_rgba(139,61,255,0.45)] transition hover:shadow-[0_0_36px_rgba(139,61,255,0.65)]"
        >
          Continue Trial Request on WhatsApp
          <ArrowRight className="h-4 w-4" />
        </button>

        {submitted && (
          <p
            role="status"
            className="mt-4 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/10 p-4 text-sm leading-6 text-[#e0e1f2]"
          >
            Your trial details have been prepared in WhatsApp. Please send the
            message there to complete your request.
          </p>
        )}
      </div>
    </form>
  );
}