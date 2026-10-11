====================================================================
 hungrybearbonduelwi.com — SEO ফিক্স করা সাইট
 তারিখ: 14 September 2026
====================================================================

এই ফোল্ডারে যা আছে
-------------------
মূল ব্যাকআপের সব ফাইল + নিচের SEO ফিক্সগুলো প্রয়োগ করা।
সার্ভারের রুট (public_html / www) ডিরেক্টরিতে হুবহু আপলোড করুন।

কী কী ফিক্স হয়েছে
-------------------
১২টি HTML পেজে:
  • <html lang="en"> যোগ (১২ পেজ)
  • <meta charset="utf-8"> যোগ (৭ পেজ)
  • ইউনিক title ট্যাগ — সব ডুপ্লিকেট দূর
  • ইউনিক meta description (১৩০–১৫৬ অক্ষর) — ৬ পেজে নতুন, ৬ পেজে ট্রিম
  • প্রতি পেজে ঠিক একটি H1 + সঠিক H2/H3 হায়ারার্কি
  • ডুপ্লিকেট viewport ট্যাগ মুছে একটি রাখা; maximum-scale সরানো (জুম আর ব্লক নয়)
  • Open Graph + Twitter Card ট্যাগ (সব পেজে)
  • rel=canonical ঠিক করা; ডুপ্লিকেট পেজ canonical/noindex দিয়ে সমাধান
  • ১৪২টি ছবিতে বর্ণনামূলক alt টেক্সট
  • ১৭০টি ছবিতে width/height (CLS ঠিক)
  • loading="lazy" + decoding="async"; প্রথম ছবিতে fetchpriority="high"
  • ১১৬টি target="_blank" লিংকে rel="noopener noreferrer"
  • JSON-LD: ভুল "@streetAddress" → "streetAddress" ইত্যাদি ঠিক
  • LocalBusiness → Restaurant schema + servesCuisine, hasMenu,
    paymentAccepted, areaServed, makesOffer, amenityFeature
  • http:// → https:// (mixed content দূর)
  • ১৩টি ভাঙা CSS/ইমেজ রেফারেন্স ঠিক
  • index.html: AJAX-নির্ভর About/Services/Testimonials/Contact সেকশনের
    কনটেন্ট স্ট্যাটিক HTML-এ বসানো (১৩৭ → ৭৯২ শব্দ, ক্রল-যোগ্য)
  • index.html: skip-to-content লিংক যোগ (কীবোর্ড অ্যাক্সেসিবিলিটি)

নতুন ফাইল:
  • favicon.ico, favicon-32x32.png, apple-touch-icon.png,
    android-chrome-192x192.png, android-chrome-512x512.png
  • site.webmanifest
  • 404.html (কাস্টম এরর পেজ)
  • ৫৬টি .webp ছবি (ভবিষ্যতে <picture> দিয়ে ব্যবহারের জন্য)
  • ৫টি অনুপস্থিত CSS ফাইলের স্টাব (404 রিকোয়েস্ট বন্ধ)

আপডেট হওয়া কনফিগ ফাইল:
  • robots.txt — User-agent/Allow/Disallow/Crawl-delay + Sitemap
  • sitemap.xml — ৬টি জাঙ্ক URL বাদ (১২ → ৬), lastmod/changefreq/priority যোগ
  • .htaccess ও .htaccess_live — HTTPS+non-www রিডাইরেক্ট, gzip/brotli,
    ব্রাউজার ক্যাশিং, সিকিউরিটি হেডার, ErrorDocument 404
  • nginx.txt — একই সেটিংসের nginx সংস্করণ

ছবি অপটিমাইজেশন:
  • ৪১টি JPEG/PNG রি-কম্প্রেস: 2.49 MB → 2.18 MB (৩১২ KB সাশ্রয়)

আপলোডের পর যা করবেন
---------------------
১. Google Search Console-এ sitemap.xml জমা দিন
২. Search Console → URL Inspection দিয়ে হোমপেজ "Request Indexing"
৩. Rich Results Test (search.google.com/test/rich-results) দিয়ে
   Restaurant schema যাচাই করুন
৪. PageSpeed Insights চালিয়ে Core Web Vitals দেখুন
৫. পুরোনো aspxerrorpath-* URL গুলো Search Console-এ removal দিলে
   ইনডেক্স আরও দ্রুত পরিষ্কার হবে

হাতে করার মতো বাকি কাজ (ফাইল দিয়ে করা সম্ভব নয়)
-------------------------------------------------
• Google Business Profile ক্লেইম/আপডেট (লোকাল SEO-তে সবচেয়ে বড় প্রভাব)
• আলাদা Menu, Catering, About পেজ তৈরি (এখন সব এক পেজে)
• .webp ছবিগুলো <picture> ট্যাগ দিয়ে মার্কআপে যুক্ত করা
• ব্লগ/নিউজ সেকশন — নিয়মিত কনটেন্ট
• রিভিউ schema (aggregateRating) — শুধু আসল, যাচাইযোগ্য ডেটা দিয়ে
