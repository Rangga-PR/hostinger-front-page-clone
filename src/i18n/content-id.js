import webHostingIcon from "../assets/shared-hosting-ico.svg";
import cloudHostingIcon from "../assets/cloud-hosting-ico.svg";
import emailHostingIcon from "../assets/email-hosting-ico.svg";
import wordpressHostingIcon from "../assets/wordpress-hosting-ico.svg";
import vpsHostingIcon from "../assets/vps-hosting-ico.svg";
import minecraftHostingIcon from "../assets/minecraft-hosting-ico.svg";
import domainCheckerIcon from "../assets/domain-checker-ico.svg";
import domainTransferIcon from "../assets/domain-transfer-ico.svg";
import whoisDatabaseIcon from "../assets/whois-database-ico.svg";
import chatSupport from "../assets/chat-support.webp";
import easyToSetup from "../assets/easy-to-setup.svg";
import microLarge from "../assets/micro-large.svg";
// import powerfulSlideone from "../assets/powerful_slide_1.webp";
// import powerfulSlidethree from "../assets/powerful_slide_3.webp";
import simplyFastWebsite from "../assets/simply-fast-websites.webp";
import speedSlidetwo from "../assets/speed_slide_2.webp";
import wpMadeEasy from "../assets/wp-made-easy.webp";

export const content = {
  featureSpotlight: {
    title: "User-Friendly Control Panel",
    img: speedSlidetwo,
    features: [
      {
        title: "Kemudahan penggunaan",
        desc:
          "Hostinger Panel merupakan tool yang user-friendly sehingga dapat digunakan oleh para pemula di bidang pengembangan website.",
      },
      {
        title: "Kecepatan Tinggi",
        desc:
          "Berbagai tool tersedia untuk memenuhi kebutuhan user profesional dan developer website.",
      },
      {
        title: "Optimasi WordPress",
        desc:
          "Custom-built WP optimization stack dan LiteSpeed cache untuk website yang lebih cepat, peringkat SEO yang lebih baik, serta retensi visitor dan konversi yang lebih meroket.",
      },
    ],
  },
  featureSection: {
    more: "Lihat semua produk",
    features: [
      {
        title: "Kemudahan setup",
        subTitle: "Mudah dan intuitif",
        desc:
          "Hanya dengan sekali klik, website Anda siap online. Dapatkan kemudahan untuk semua hal yang Anda butuhkan.",
        img: easyToSetup,
      },
      {
        title: "Kurangi waktu loading",
        subTitle: "Performa dan kecepatan",
        desc:
          "Kecepatan loading yang melambat akan menghambat kesuksesan bisnis online Anda. Datangkan lebih banyak trafik dengan memaksimalkan performa website.",
        img: simplyFastWebsite,
      },
      {
        title: "Wordpress mudahkan Segalanya",
        subTitle: "Pengalaman Wordpress terbaik",
        desc:
          "Install WordPress otomatis dengan tool 1-click installer dan mulailah membuat website. Untuk memastikan keandalan, keamanan, dan kecepatan web, backend WordPress dilengkapi dengan LiteSpeed caching dan tool optimasi tingkat lanjut.",
        img: wpMadeEasy,
      },
      {
        title: "Chat bantuan 24/7/365",
        subTitle: "Profesional dan berpengalaman",
        desc:
          "Tim Customer Support siap membantu Anda dalam mengatasi berbagai permasalahan teknis. Kapan pun Anda butuh bantuan, segera hubungi kami.",
        img: chatSupport,
      },
      {
        title: "Dari web sederhana hingga berskala besar",
        subTitle: "fleksibel dan dapat diskalakan",
        desc:
          "Masing-masing web dikelola dan dikembangkan dengan teknologi yang berbeda. Pilih paket hosting yang tepat, lalu upgrade seiring dengan perkembangan dan kebutuhan website.",
        img: microLarge,
      },
    ],
  },
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
