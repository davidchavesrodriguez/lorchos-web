import type { ImageMetadata } from "astro";
import abelanLogo from "../assets/sponsors/Abelan-logo-web.png";
// TODO: Confirm the sponsor identity represented by this ambiguously named asset.
import unidentifiedSponsorLogo from "../assets/sponsors/images.jpg";

export interface Sponsor {
  name: string;
  logo: ImageMetadata;
}

export const sponsors: Sponsor[] = [
  {
    name: "Abelan",
    logo: abelanLogo,
  },
  {
    name: "Patrocinador por confirmar",
    logo: unidentifiedSponsorLogo,
  },
];
