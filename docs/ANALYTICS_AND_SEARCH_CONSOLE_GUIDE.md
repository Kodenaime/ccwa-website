# CCWA International — Analytics, Tag Manager & Search Console Guide

This guide summarizes the analytics, SEO/AEO/GEO, and event-tracking setup on the **CCWA International** website (`https://www.ccwaintl.org`) and explains how administrators can view metrics and configure tags.

---

## 1. Summary of What Is Configured

| Component | Details |
| :--- | :--- |
| **Google Tag Manager (GTM)** | Container ID **`GTM-5XQ6R4C7`** is installed in `index.html` (both `<head>` and `<body>` `<noscript>`). |
| **XML Sitemap** | Automatically generated at `https://www.ccwaintl.org/sitemap.xml` on every production build, including all main pages, all 11 activity detail pages, and all event detail pages. |
| **Robots & AI Crawlers** | `https://www.ccwaintl.org/robots.txt` allows search engines and AI answer engines (`Googlebot`, `Bingbot`, `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) and points to `sitemap.xml`. |
| **GEO (`llms.txt`)** | `https://www.ccwaintl.org/llms.txt` provides AI assistants with an authoritative, structured summary of CCWA's mission, impact stats, programmes, and contact details. |
| **SEO & AEO Structured Data** | Dynamic canonical URLs and OpenGraph/Twitter tags per route, plus Schema.org JSON-LD (`Organization`/`NGO`, `WebSite`, `FAQPage`, `Event`, and `BreadcrumbList`). |

---

## 2. How Admins View Metrics in Google Search Console

1. Go to **[Google Search Console](https://search.google.com/search-console/)** and sign in with the admin Google account.
2. Select the **`ccwaintl.org`** property in the top-left property selector.
3. **Submit the Sitemap (One-Time Setup):**
   - In the left menu, click **Sitemaps**.
   - Enter `sitemap.xml` in the *Add a new sitemap* box and click **Submit**.
   - Status should show **Success** once Google crawls it.
4. **Key Reports to Monitor:**
   - **Performance (Search Results):** Shows total **Clicks**, **Impressions**, **Average CTR**, and **Average Position**, plus the exact Google search queries people used to find CCWA.
   - **Pages (Indexing):** Confirms how many pages are indexed and flags any crawl or 404 issues.
   - **URL Inspection (Top Search Bar):** Paste any page URL (e.g., a newly added event page) to check if it is indexed or click **Request Indexing**.

---

## 3. How Admins View Metrics in Google Tag Manager & GA4

- **Google Tag Manager (`tagmanager.google.com`)** manages *what* gets tracked and *where* data is sent. It does not display visitor charts itself—it forwards events to **Google Analytics 4 (GA4)** (`analytics.google.com`).
- Once GA4 is linked inside GTM (see Section 4 below), admins can view metrics at **[Google Analytics](https://analytics.google.com/)**:
  - **Reports → Realtime:** See visitors currently on the site, which pages they are viewing, and live events firing.
  - **Reports → Acquisition → Traffic acquisition:** See whether visitors came from Google Search (Organic), Social Media, Direct links, or Referrals.
  - **Reports → Engagement → Pages and screens:** See the most visited pages (e.g., `/events`, `/sponsorship`, `/activities`).
  - **Reports → Engagement → Events:** See counts for custom actions like `contact_form_submit`, `donation_initiated`, `donation_completed`, and `membership_form_download`.

---

## 4. Events Wired Into the Website & How to Set Them Up in GTM

The website already pushes structured events to `window.dataLayer` so you do **not** need to write custom code in GTM—just create the triggers and tags below.

### Built-in `dataLayer` Events

| Event Name (`event`) | When It Fires | Parameters Included |
| :--- | :--- | :--- |
| **`page_view`** | Every time a visitor navigates to a new route in the app (handles SPA navigation) | `page_path`, `page_location`, `page_title` |
| **`contact_form_submit`** | When a visitor successfully submits the Contact Us form | `subject` |
| **`donation_initiated`** | When a visitor opens the Paystack payment modal on Sponsorship/Donate | `amount`, `currency` (`NGN`), `method` (`paystack`) |
| **`donation_completed`** | When a Paystack donation succeeds | `amount`, `currency` (`NGN`), `method` (`paystack`) |
| **`donation_cancelled`** | When a visitor closes the Paystack modal without completing | `amount`, `currency` (`NGN`), `method` (`paystack`) |
| **`membership_form_download`** | When a visitor clicks to download the Orphans or Widows/Widowers PDF form | `form_type` (`orphans` or `widows_widowers`), `file_name` |

### Step-by-Step GTM Setup (`GTM-5XQ6R4C7`)

1. **Connect GA4 (Google Tag):**
   - In GTM, go to **Tags → New → Tag Configuration → Google Analytics → Google Tag**.
   - Enter your **GA4 Measurement ID** (e.g. `G-XXXXXXXXXX` from GA4 Admin → Data Streams).
   - Under **Triggering**, select **Initialization - All Pages**.
   - Name it `GA4 - Google Tag` and **Save**.

2. **Track Single-Page App (SPA) Page Views:**
   - Go to **Triggers → New → Custom Event**, set Event name to `page_view`, and save as `CE - page_view`.
   - Go to **Tags → New → Google Analytics: GA4 Event**.
   - Select your GA4 Measurement ID, set Event Name to `page_view`, and attach trigger `CE - page_view`.
   - *(Tip: In GA4 Data Stream → Enhanced Measurement → Page views → Show advanced settings, you can also keep "Page changes based on browser history events" enabled or rely on this custom `page_view` trigger—use one or the other so page views are not double-counted.)*

3. **Create Data Layer Variables (for Event Parameters):**
   - Go to **Variables → User-Defined Variables → New → Data Layer Variable** and create variables for:
     - `dlv - amount` (Data Layer Variable Name: `amount`)
     - `dlv - currency` (Data Layer Variable Name: `currency`)
     - `dlv - form_type` (Data Layer Variable Name: `form_type`)
     - `dlv - subject` (Data Layer Variable Name: `subject`)

4. **Create GA4 Event Tags for Key Conversions:**
   For each of the key actions (`contact_form_submit`, `donation_initiated`, `donation_completed`, `membership_form_download`):
   - **Trigger:** **Triggers → New → Custom Event** → enter the exact Event name (e.g. `donation_completed`).
   - **Tag:** **Tags → New → Google Analytics: GA4 Event** → enter your GA4 Measurement ID, set the Event Name (e.g. `donation_completed` or GA4 recommended `purchase`/`generate_lead`), add Event Parameters using the `{{dlv - ...}}` variables above, and attach the matching trigger.

5. **Test & Publish:**
   - Click **Preview** in the top-right of GTM, enter `https://www.ccwaintl.org`, and test navigating pages, downloading a PDF, or submitting the contact form to confirm each tag fires.
   - Click **Submit → Publish** in GTM to make the tags live for all visitors.
