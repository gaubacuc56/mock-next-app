"use client";

import { useTransition } from "react";
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();

    const changeLanguage = (newLocale: string) => {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: newLocale }
            );
        });
    };

    return (
        <div >
            <p>{isPending ? 'loading' : `Current lang: ${locale}`}</p>
            <div className="flex gap-5">
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("vn")}>Vietnamese</button>
            </div>

        </div>
    );
}
