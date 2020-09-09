type Update = (...data: unknown[]) => unknown

type MenuItem = { label: string, icon?: string, up?: Update, data?: unknown, items?: MenuItem[] }

export function topMenu ({ icon, items }: {icon: string, items: MenuItem[]}) : unknown
