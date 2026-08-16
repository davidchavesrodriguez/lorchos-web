export interface SocialLink {
  platform: "Instagram" | "YouTube" | "Facebook" | "TikTok";
  url: string | null;
}

export interface SiteContact {
  email: string;
  socialLinks: SocialLink[];
}

export const siteContact: SiteContact = {
  email: "lorchos.fg@gmail.com",
  socialLinks: [
    { platform: "Instagram", url: null },
    { platform: "YouTube", url: null },
    { platform: "Facebook", url: null },
    { platform: "TikTok", url: null },
  ],
};
