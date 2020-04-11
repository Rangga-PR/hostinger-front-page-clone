import webHostingIcon from "../assets/shared-hosting-ico.svg";
import cloudHostingIcon from "../assets/cloud-hosting-ico.svg";
import emailHostingIcon from "../assets/email-hosting-ico.svg";
import wordpressHostingIcon from "../assets/wordpress-hosting-ico.svg";
import vpsHostingIcon from "../assets/vps-hosting-ico.svg";
import minecraftHostingIcon from "../assets/minecraft-hosting-ico.svg";
import domainCheckerIcon from "../assets/domain-checker-ico.svg";
import domainTransferIcon from "../assets/domain-transfer-ico.svg";
import whoisDatabaseIcon from "../assets/whois-database-ico.svg";

export const content = {
  navbar: {
    lang: "ID",
    user: {
      login: "Masuk",
    },
    desktop: {
      menu: [
        {
          text: "Website Builder",
        },
        {
          text: "Hosting",
          children: [
            {
              text: "Shared Web Hosting",
              subText: "Untuk website skala kecil dan medium.",
              img: webHostingIcon,
            },
            {
              text: "Cloud Hosting Indonesia",
              subText: "Untuk website skala besar.",
              img: cloudHostingIcon,
            },
            {
              text: "Email Hosting Indonesia",
              subText: "Promosikan bisnis dan jangkau banyak pelanggan.",
              img: emailHostingIcon,
            },
            {
              text: "Wordpress Hosting Indonesia",
              subText: "Dioptimasi untuk Wordpress hosting.",
              img: wordpressHostingIcon,
            },
          ],
        },
        {
          text: "VPS",
          children: [
            {
              text: "VPS Murah Indonesia",
              subText: "Dedicated resource untuk membuat website.",
              img: vpsHostingIcon,
            },
            {
              text: "Minecraft Hosting",
              subText: "Buat server Minecraft sendiri.",
              img: minecraftHostingIcon,
            },
          ],
        },
        {
          text: "Domain",
          children: [
            {
              text: "Cek Domain",
              subText: "Cari nama domain yang tepat.",
              img: domainCheckerIcon,
            },
            {
              text: "WHOIS Database",
              subText: "Tool lookup untuk cari info WHOIS.",
              img: whoisDatabaseIcon,
            },
            {
              text: "Domain Transfer",
              subText: "Ingin transfer domain ke Hostinger?",
              img: domainTransferIcon,
            },
          ],
        },
        {
          text: "Harga",
        },
      ],
    },
    mobile: {
      menu: [
        {
          text: "Website Builder",
          linkto: "#",
          icon: "view_compact",
        },
        {
          text: "Shared Web Hosting",
          linkto: "#",
          img: webHostingIcon,
        },
        {
          text: "Cloud Hosting Indonesia",
          linkto: "#",
          img: cloudHostingIcon,
        },
        {
          text: "Email Hosting Indonesia",
          linkto: "#",
          img: emailHostingIcon,
        },
        {
          text: "Wordpress Hosting Indonesia",
          linkto: "#",
          img: wordpressHostingIcon,
        },
        {
          text: "VPS Murah Indonesia",
          linkto: "#",
          img: vpsHostingIcon,
        },
        {
          text: "Minecraft Hosting",
          linkto: "#",
          img: minecraftHostingIcon,
        },
        {
          text: "Cek Domain",
          linkto: "#",
          img: domainCheckerIcon,
        },
        {
          text: "WHOIS Database",
          linkto: "#",
          img: whoisDatabaseIcon,
        },
        {
          text: "Domain Transfer",
          linkto: "#",
          img: domainTransferIcon,
        },
        {
          text: "Harga",
          linkto: "#",
          icon: "attach_money",
        },
      ],
    },
  },
};
