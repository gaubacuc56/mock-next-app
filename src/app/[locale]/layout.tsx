/* eslint-disable @typescript-eslint/no-explicit-any */
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { routing } from "@/i18n/routing";
import SessionProviders from "@/provider/session";
import { ThemeProvider } from "@/provider/theme";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const locale = await (await params).locale
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html >
            <ThemeProvider>
                <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <SessionProviders>
                                <LanguageSwitcher />
                                {children}
                        </SessionProviders>
                    </NextIntlClientProvider>
                </body>
            </ThemeProvider>
        </html>
    );
}