import Image from "next/image";
const teamMembers = [

{
name: "Johnson Olushola Adedokun",
role: "Founder & Visioner",
image: "/images/team/FOUNDER.jpg",
group: "Founder"
},

{
name: "Adeleye Taiwo Shola",
role: "Board of Trustees Member",
image: "/images/team/ADELEYE.jpg",
group: "Board"
},

{
name: "Sefia Ojochogwu Odugbo",
role: "Secretary, Board of Trustees",
image: "/images/team/SEFIA.jpg",
group: "Board"
},

{
name: "Embaga Joseph Dan",
role: "Project Coordinator",
image: "/images/team/EMBAGA.jpg",
group: "Leadership"
},

{
name: "Babatunde Olusegun Adewale",
role: "Project Manager",
image: "/images/team/BABATUNDE.jpg",
group: "Leadership"
}

];
const programs = [
  {
    title: "Thyroid Awareness",
    description:
      "Educating communities on thyroid health, early detection, and proper medical support."
  },
  {
    title: "Widow Empowerment",
    description:
      "Providing support, training, and resources to help widows rebuild stable and independent lives."
  },
  {
    title: "Youth Skill Development",
    description:
      "Equipping young people with practical skills, mentorship, and opportunities for growth."
  },
  {
    title: "Educational Support",
    description:
      "Supporting children and vulnerable families with access to education and learning resources."
  }
];
const stats = [
  { value: "4", label: "Core Programs" },
  { value: "1", label: "Shared Mission" },
  { value: "100%", label: "Community Focused" },
  { value: "Ongoing", label: "Support & Outreach" },
];
const outreachGroups = [
  {
    title: "Stakeholders Engagement",
    id: "stakeholders",
    date: "February 2025",
    description:
      "The foundation began its thyroid awareness campaign with a stakeholders engagement in Lafia, Nasarawa State, bringing together community leaders, religious leaders, health workers, and representatives of the Ministry of Health to share the mission and build local support.",
    folder: "STAKEHOLDERS ENGAGEMENT",
    images: [
      "stake1.jpg",
      "stake2.jpg",
      "stake3.jpg",
      "stake4.jpg",
      "stake5.jpg",
      "stake6.jpg",
      "stake7.jpg",
      "stake8.jpg",
      "stake9.jpg",
      "stake10.jpg",
      "stake11.jpg",
      "stake12.jpg",
    ],
  },
  {
    title: "Community Sensitisation Drive",
    id: "community",
    description:
      "The next phase focused on community sensitisation drives in churches, mosques, community centres, and market areas, helping people understand thyroid disorders, symptoms, and the importance of early testing and awareness.",
    folder: "COMMUNITY SESITISATION DRIVE",
    images: [
      "comsen1.jpg",
      "comsen2.jpg",
      "comsen3.jpg",
      "comsen4.jpg",
      "comsen5.jpg",
      "comsen6.jpg",
      "comsen7.jpg",
      "comsen8.jpg",
      "comsen9.jpg",
      "comsen10.jpg",
      "comsen11.jpg",
      "comsen12.jpg",
      "comsen13.jpg",
      "comsen14.jpg",
      "comsen15.jpg",
    ],
  },
  {
    title: "World Thyroid Day Street Walk",
    id: "thyroid-day",
    date: "25 May 2025",
    description:
      "To commemorate World Thyroid Day on 25 May 2025, the foundation organised a street walk in Lafia to raise awareness, spark public conversations, and encourage people to pay attention to thyroid health.",
    folder: "THYROID WORLD DAY",
    images: [
      "thywor1.jpg",
      "thywor2.jpg",
      "thywor3.jpg",
      "thywor4.jpg",
      "thywor5.jpg",
      "thywor6.jpg",
      "thywor7.jpg",
      "thywor8.jpg",
      "thywor9.jpg",
      "thywor10.jpg",
    ],
  },
  {
    title: "Foundation Launch",
    id: "launch",
    date: "25–27 May 2025",
    description:
      "The foundation launch was a three-day program that included the World Thyroid Walk on 25/05/2025, school sandals distribution on 26/05/2025 at TA'AL Model Primary School and Tudun Gwandara Primary School, and the official foundation launch on 27/05/2025.",
    highlight:
      "At the main launch, 30 widows were empowered with grants of ₦100,000 each, while 5 young ladies were trained and empowered in catering services with startup kits and cash support.",
    folder: "FOUNDATION LAUNCH",
    images: [
      "found1.jpg",
      "found2.jpg",
      "found3.jpg",
      "found4.jpg",
      "found5.jpg",
      "found6.jpg",
      "found7.jpg",
      "found8.jpg",
      "found9.jpg",
      "found10.jpg",
      "found11.jpg",
      "found12.jpg",
      "found13.jpg",
      "found14.jpg",
      "found15.jpg",
    ],
  },
];

const mediaVideos = [
  {
    title: "Foundation Activity Video",
    description:
      "A video highlight of one of the foundation’s major outreach and awareness activities.",
    embedUrl: "https://www.youtube.com/embed/zJH6V3zvIpI",
    watchUrl: "https://youtu.be/zJH6V3zvIpI?si=wc67TeCI9nUtwaHp",
  },
  {
    title: "Silent Weight",
    description:
      "A drama film created to deepen awareness and public understanding around thyroid-related issues.",
    embedUrl: "https://www.youtube.com/embed/8_9mhjZwIgA",
    watchUrl: "https://youtu.be/8_9mhjZwIgA?si=JJ3HTTPPdXDK3GEY",
  },
];
export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ARO Foundation Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-800">
                ARO Foundation
              </p>
              <p className="text-sm text-slate-500">The Nurturing Place</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
         <a href="#about" className="hover:text-blue-800">About</a>

<a href="#programs" className="hover:text-blue-800">Programs</a>

<a href="#impact" className="hover:text-blue-800">Impact</a>

<a href="#media" className="hover:text-blue-800">Media</a>

<a href="#contact" className="hover:text-blue-800">Get Involved</a>  
           <a
  href="https://wa.me/2348036144445"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-300"

>
  Donate

</a>
            <a
  href="https://wa.me/2348036144445"
  target="_blank"
  className="rounded-lg bg-blue-800 px-6 py-3 text-white"
>
  Volunteer
</a>
          </nav>
        </div>
      </header>

     <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
  <div className="absolute inset-0">
    <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
    <div className="absolute right-[-80px] top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
    <div className="absolute bottom-[-120px] left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
  </div>

  <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
    <div className="max-w-3xl">
      <p className="mb-5 inline-flex rounded-full border border-yellow-300/20 bg-yellow-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
        An Opportunity to Thrive
      </p>

      <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">
        Adedokun Rebecca Omolola Foundation
      </h1>

      <p className="mt-5 text-xl text-blue-100 md:text-2xl">
        The Nurturing Place
      </p>

      <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100/90 md:text-lg">
        Creating opportunities for vulnerable individuals through thyroid
        awareness, empowerment, educational support, and community outreach.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#programs"
          className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-yellow-300"
        >
          Explore Our Programs
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
        >
          Get Involved
        </a>
      </div>
    </div>

    <div className="rounded-[2rem] bg-white/95 p-8 text-slate-900 shadow-[0_20px_80px_rgba(0,0,0,0.25)] ring-1 ring-white/20 backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-blue-50 p-2">
          <Image
            src="/logo.png"
            alt="ARO Foundation Logo"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-800">Our Vision</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            A future where vulnerable groups are given the opportunity to
            thrive.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-200">
        <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
        <p className="mt-3 leading-8 text-slate-600">
          We strive to create a nurturing environment where individuals can
          rebuild their lives, develop meaningful skills, and contribute
          positively to their communities and society at large.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-blue-900 p-4 text-white">
          <p className="text-2xl font-bold">4+</p>
          <p className="mt-1 text-sm text-blue-100">Core Focus Areas</p>
        </div>

        <div className="rounded-2xl bg-yellow-400 p-4 text-slate-950">
          <p className="text-2xl font-bold">2025</p>
          <p className="mt-1 text-sm">Active Outreach Campaigns</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A mission rooted in care, dignity, and meaningful support.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              The Adedokun Rebecca Omolola Foundation is a nonprofit
              organization dedicated to supporting vulnerable individuals and
              communities through health awareness, skills empowerment, and
              educational support initiatives.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our work is centered on practical impact, compassion, and the
              belief that every individual deserves access to opportunity,
              support, and a chance to thrive.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-blue-800">
              What We Stand For
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Compassion", "Empowerment", "Integrity", "Community"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-4 py-5 text-center font-medium shadow-sm"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-slate-50 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
        What We Do
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
        Our Programs
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
        We create impact through thyroid awareness, widow empowerment,
        youth development, and educational support for vulnerable
        individuals and communities.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {programs.map((program, index) => (
        <div
          key={program.title}
          className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-800 text-lg font-bold text-white shadow-sm">
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
            {program.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {program.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="thyroid" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
                Thyroid Awareness
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Understanding thyroid health can save lives.
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
  Our thyroid awareness work focuses on helping individuals and families in
  Nigeria understand thyroid symptoms, the importance of early testing, and
  the value of timely medical attention.
</p>
              <p className="mt-6 leading-8 text-slate-600">
                The thyroid is a small gland in the neck that plays an important
                role in regulating metabolism, energy level, body temperature,
                and several essential body functions.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Many thyroid conditions go unnoticed because their symptoms are
                often mistaken for stress, fatigue, hormonal changes, or
                everyday health struggles. This is why awareness and early
                attention matter.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Through education and community sensitization, we aim to help
                more people recognize the warning signs early and seek proper
                medical care.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-bold text-blue-800">
                Common Warning Signs
              </h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Unexplained weight gain or weight loss</li>
                <li>• Constant tiredness or unusual weakness</li>
                <li>• Swelling or discomfort around the neck</li>
                <li>• Fast or unusually slow heartbeat</li>
                <li>• Mood changes, anxiety, or depression</li>
                <li>• Sensitivity to cold or heat</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Why Awareness Matters
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Many people live with thyroid-related symptoms for long periods
                without knowing the cause. Awareness helps people take action
                early.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Early Detection
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Early testing and proper diagnosis can improve quality of life
                and help reduce avoidable complications.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Community Education
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Public sensitization empowers families and communities with
                practical knowledge about thyroid symptoms and care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="support" className="bg-slate-50 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
          Request Support
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Need help with thyroid support or guidance?
        </h2>
        <p className="mt-6 leading-8 text-slate-600">
          If you or someone you know is living with a thyroid condition and
          needs help, guidance, awareness support, or direction on the next
          step, you can fill this form and our team will review the request and
          reach out where possible.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Please note</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <li>• This support form does not replace medical diagnosis or emergency care.</li>
            <li>• Please provide clear and truthful information.</li>
            <li>• Our team may contact you by phone, email, or WhatsApp.</li>
            <li>• In urgent medical situations, please visit a hospital immediately.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-2xl">
        <form
          action="#"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          />

          <input
            type="text"
            name="location"
            placeholder="City / State"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          />

          <select
            name="requestFor"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            defaultValue=""
          >
            <option value="" disabled>
              Are you seeking help for yourself or someone else?
            </option>
            <option value="self">For myself</option>
            <option value="someone-else">For someone else</option>
          </select>

          <select
            name="supportType"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            defaultValue=""
          >
            <option value="" disabled>
              What kind of support do you need?
            </option>
            <option value="awareness-guidance">Awareness / guidance</option>
            <option value="medical-direction">Help finding next medical step</option>
            <option value="emotional-support">Emotional / community support</option>
            <option value="financial-support">Financial support inquiry</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="situation"
            placeholder="Tell us briefly about the situation"
            className="min-h-[150px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          />

          <select
            name="contactMethod"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
            defaultValue=""
          >
            <option value="" disabled>
              Preferred contact method
            </option>
            <option value="phone">Phone call</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>

          <label className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <input type="checkbox" name="consent" className="mt-1" />
            <span>
              I agree to be contacted by ARO Foundation regarding this request.
            </span>
          </label>
<p className="text-sm text-slate-500">
Support request submissions will be activated soon. 
In the meantime, you can contact us through the Contact section below.
</p>
          <button
            type="submit"
            className="rounded-2xl bg-blue-800 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
<section id="outreach" className="bg-white py-20">
 <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
        Programs in Action
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
        Our outreach and awareness work
      </h2>

      <p className="mt-5 leading-8 text-slate-600">
        These moments reflect the foundation’s work across stakeholder
        engagement, community sensitisation, World Thyroid Day awareness,
        and the official foundation launch activities in Lafia, Nasarawa State.
      </p>
    </div>
    </div>


  <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
    Programs & Outreach Activities
  </h2>

  <p className="mt-4 max-w-2xl text-slate-600">
    Our programs focus on thyroid awareness, community education,
    empowerment initiatives and public health engagement across
    communities.
  </p>

  <div className="mt-10 space-y-6">
    

    {outreachGroups.map((group) => (
      <details key={group.id} className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">

     

        <summary className="cursor-pointer text-xl font-semibold text-slate-900">
          {group.title}
        </summary>

        <p className="mt-3 text-slate-600">
          {group.description}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.images.map((image) => (

            <img
              key={image}
              src={`/images/${group.folder}/${image}`}
              alt={group.title}
              className="h-56 w-full rounded-xl object-cover"
            />

          ))}
        </div>

      </details>

    ))}

  </div>
</section>
    <section className="bg-white py-20">

<div className="mx-auto max-w-7xl px-6">

<p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
Leadership & Governance
</p>

<h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
Meet Our Team
</h2>

<p className="mt-5 max-w-2xl text-slate-600">
The ARO Foundation operates through a committed leadership structure that ensures transparency, accountability, and effective delivery of humanitarian programs.
</p>

<div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">

{teamMembers.map((member) => (

<div
key={member.name}
className="rounded-xl bg-slate-50 p-6 shadow-sm text-center"
>

<img
src={member.image}
alt={member.name}
className="mx-auto h-40 w-40 rounded-full object-cover"
/>

<h3 className="mt-4 text-lg font-semibold text-slate-900">
{member.name}
</h3>

<p className="text-sm text-blue-800">
{member.role}
</p>

</div>

))}

</div>

</div>

</section>
<section className="bg-slate-50 py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
        Video Highlights
      </p>

      <h3 className="mt-3 text-3xl font-bold text-slate-900">
        Watch our awareness work
      </h3>
    </div>

    <div className="mt-10 grid gap-8 md:grid-cols-2">

      {mediaVideos.map((video) => (
        <div key={video.title} className="rounded-2xl overflow-hidden shadow-sm">

          <iframe
            src={video.embedUrl}
            title={video.title}
            className="w-full aspect-video"
            allowFullScreen
          />

        </div>
      ))}

    </div>

  </div>
</section>
     <section id="impact" className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
        Our Impact
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
        Building hope through awareness, empowerment, and support
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
        We are committed to creating meaningful change in vulnerable
        communities through health awareness, skills development, and
        practical support initiatives that help people thrive.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-4">
      <div className="rounded-[2rem] bg-blue-900 p-8 text-white shadow-lg">
        <h3 className="text-4xl font-bold text-yellow-300">4</h3>
        <p className="mt-3 text-base text-blue-100">Core Programs</p>
      </div>

      <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-4xl font-bold text-blue-800">100+</h3>
        <p className="mt-3 text-base text-slate-600">Lives Reached</p>
      </div>

      <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-4xl font-bold text-blue-800">Ongoing</h3>
        <p className="mt-3 text-base text-slate-600">Community Support</p>
      </div>

      <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-4xl font-bold text-blue-800">Active</h3>
        <p className="mt-3 text-base text-slate-600">Awareness Campaigns</p>
      </div>
    </div>

    <div className="mt-12 rounded-[2rem] bg-slate-50 p-8 ring-1 ring-slate-200 md:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
            A mission that goes beyond words
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            From raising awareness of thyroid diseases to empowering widows,
            supporting children’s education, and equipping youth with
            practical skills, the foundation exists to create opportunities
            where they are needed most.
          </p>
        </div>

        <div className="rounded-[2rem] bg-blue-900 p-8 text-white shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Why It Matters
          </p>

          <p className="mt-4 leading-8 text-blue-100">
            Every initiative is aimed at restoring dignity, strengthening
            communities, and helping vulnerable people access support,
            opportunity, and hope.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Outreach Activities
            </h2>

            <p className="mt-4 text-slate-600">
              Through awareness programs, training initiatives, and community
              support activities, the foundation continues to reach and empower
              vulnerable individuals across communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/images/outreach1.jpg"
                alt="Community outreach"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/images/outreach2.jpg"
                alt="Awareness program"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/images/outreach3.jpg"
                alt="Community support"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/images/training.jpg"
                alt="Training program"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Get Involved</h2>

          <p className="mt-4 text-slate-600">
            Join us in creating opportunities for vulnerable individuals. You
            can support our work by volunteering, partnering with us, or
            contributing to our outreach programs.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
  href="https://wa.me/2348036144445"
  target="_blank"
  className="rounded-lg bg-blue-800 px-6 py-3 text-white"
>
  Volunteer
</a>

          <a
 href="#donate-details"
  className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-blue-900"
>
  Donate
</a>
          </div>
        </div>
      </section>
      <section id="donate-details" className="bg-slate-50 py-20">
  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
        Support Our Work
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
        Make a Donation
      </h2>

      <p className="mt-5 leading-8 text-slate-600">
        Your support helps us continue thyroid awareness campaigns, community
        outreach, widow empowerment, youth training, and educational support
        for vulnerable individuals.
      </p>
    </div>

    <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Account Name
          </p>

          <p className="mt-2 text-lg font-bold text-slate-900">
            Adedokun Rebecca Omolola A.R.O Foundation
          </p>
        </div>


        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Bank Name
          </p>

          <p className="mt-2 text-lg font-bold text-slate-900">
            Moniepoint Microfinance Bank
          </p>
        </div>


        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Account Number
          </p>

          <p className="mt-2 text-xl font-bold text-slate-900">
            8036144445
          </p>
        </div>


        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Donation Confirmation
          </p>

          <p className="mt-2 text-base font-medium text-slate-900">
            WhatsApp: +234 803 614 4445
          </p>

          <p className="mt-1 text-base font-medium text-slate-900">
            Email: aroffoundation@gmail.com
          </p>
        </div>

      </div>


      <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-sm leading-7 text-slate-700">
        After making a donation, kindly send proof of payment through WhatsApp
        or email so we can acknowledge and document your support.
      </div>

    </div>

  </div>
</section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Let’s work together for impact.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Reach out to volunteer, partner with the foundation, support a
              program, or learn more about our mission and activities.
            </p>

            <div className="mt-8 space-y-3 text-slate-300">
              <p>
                <span className="font-semibold text-white">Phone:</span> +234
                803 614 4445
              </p>
              <p>
                <span className="font-semibold text-white">Instagram:</span>{" "}
                @aroffoundation
              </p>
              <p>
                <span className="font-semibold text-white">Facebook:</span>{" "}
                Adedokun Rebecca Omolola Foundation
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
           <form
  action="mailto:aroffoundation@gmail.com"
  method="POST"
  encType="text/plain"
  className="grid gap-4"
>
  <input
    type="text"
    name="Name"
    placeholder="Your name"
    className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
  />

  <input
    type="email"
    name="Email"
    placeholder="Your email"
    className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
  />

  <input
    type="text"
    name="Subject"
    placeholder="Subject"
    className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
  />

  <textarea
    name="Message"
    placeholder="Your message"
    className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
  />

  <button
    type="submit"
    className="rounded-2xl bg-blue-800 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
  >
    Send Message
  </button>
</form>
            
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">ARO Foundation</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Creating opportunities for vulnerable individuals through
              empowerment, health awareness, and community support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
  <li><a href="#about">About</a></li>
  <li><a href="#programs">Programs</a></li>
  <li><a href="#thyroid">Thyroid Awareness</a></li>
  <li><a href="#impact">Impact</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>+234 803 614 4445</p>
              <p>@aroffoundation</p>
              <p>Adedokun Rebecca Omolola Foundation</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          © 2026 ARO Foundation. All rights reserved.
        </p>
      </footer>
      <a
  href="https://wa.me/2348036144445"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
>
  Chat on WhatsApp
</a>
    </main>
  );
}