import { motion } from "motion/react";
import { useState } from "react";
import { Trophy, ChevronDown, ChevronUp } from "lucide-react";

interface CaseResult {
  year: string;
  client: string;
  charge: string;
  outcome: string;
  detail: string;
}

interface CaseCardProps {
  result: CaseResult;
  index: number;
}

function CaseCard({ result, index }: CaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#2E5BFF]/50 transition-all duration-300"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-start justify-between gap-4 group"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="text-[#2E5BFF] flex-shrink-0" size={20} />
            <span className="text-[#8E9196] text-sm">{result.year}</span>
            <span className="text-[#2E5BFF] font-semibold">{result.outcome}</span>
          </div>
          <h3 className="text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {result.client}
          </h3>
          <p className="text-[#8E9196]">{result.charge}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#2E5BFF] flex-shrink-0 mt-2"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0 border-t border-white/10">
          <div className="mt-4">
            <h4 className="text-sm text-[#2E5BFF] mb-2">Detail</h4>
            <p className="text-[#8E9196] leading-relaxed">{result.detail}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CaseResults() {
  const caseResults: CaseResult[] = [
    {
      year: "2017",
      client: "A.D.",
      charge: "Domestic A&B",
      outcome: "Dismissed by Judge",
      detail: "Mr. Cagle successfully argued to preliminary hearing magistrate that the state presented insufficient evidence against his client. Charge dismissed.",
    },
    {
      year: "2016",
      client: "S.B.",
      charge: "Robbery First Degree",
      outcome: "Preliminary Hearing Bindover Quashed",
      detail: "Successfully argued to the district judge the preliminary hearing magistrate incorrectly bound our client over on Robbery First Degree. Charges amended to Robbery Second Degree. Robbery Second Degree carries less time and is not an 85% crime.",
    },
    {
      year: "",
      client: "Women in Recovery",
      charge: "Drug Treatment Program",
      outcome: "Drug Treatment",
      detail: "Mr. Cagle has numerous clients in the highly successful Women in Recovery Program. These clients would likely be in prison if Mr. Cagle had not sought the appropriate drug treatment program for them.",
    },
    {
      year: "2012",
      client: "Woods",
      charge: "DUI - Drugs",
      outcome: "Case Dismissed",
      detail: "Mr. Cagle felt the State of Oklahoma had waited too long to prosecute his client. After filing the appropriate motion the state of Oklahoma conceded and dismissed the case!!",
    },
    {
      year: "July 2010",
      client: "O'Connell",
      charge: "Transporting a Loaded Firearm",
      outcome: "Case Dismissed",
      detail: "Mr. Cagle felt the Oklahoma Highway Patrol had illegally searched his client's car. After filing the appropriate motions the state of Oklahoma conceded and dismissed the case!!",
    },
    {
      year: "November 2011",
      client: "Whitecloud",
      charge: "Murder First Degree",
      outcome: "Not Guilty",
      detail: "Mark Cagle and his colleague Stephen Lee tried a murder first degree Jury Trial in Okmulgee County. Not Guilty on Murder 1 and Murder 2!!!",
    },
    {
      year: "February 2010",
      client: "Okotoghaide",
      charge: "Robbery",
      outcome: "Plea Agreement",
      detail: "Mr. Cagle felt the state of Oklahoma's robbery case was weak. After filing the appropriate motions the state of Oklahoma agreed and offered a plea agreement that included no additional time in prison!! (Mr. Cagle's client was already serving 2 years for another case in which Mr. Cagle had not been counsel)",
    },
    {
      year: "December 2010",
      client: "Daniels",
      charge: "Murder First Degree",
      outcome: "Case Dismissed",
      detail: "After a preliminary hearing murder dismissed by the state of Oklahoma!!",
    },
    {
      year: "April 2010",
      client: "Logan",
      charge: "Larceny of Automobile, Possession of a Stolen Vehicle, Eluding the Police",
      outcome: "No Evidence",
      detail: "Mr. Cagle put on a preliminary hearing for his client and the case was left with no evidence.",
    },
    {
      year: "March 2010",
      client: "Gibbs",
      charge: "Accessory to Robbery, Possession of a Controlled Drug",
      outcome: "Deferred Sentence",
      detail: "The state of Oklahoma wanted Mr. Cagle's client to serve 6 years in prison for assisting in a robbery and several drug charges. Mr. Cagle felt the state of Oklahoma overreached when they charged his client with the robbery. The Judge agreed and the accessory to robbery was dismissed at the preliminary hearing level. Mr. Cagle worked out a deal for his client to receive a deferred sentence and have her other charges dismissed upon a successful probation term!",
    },
    {
      year: "October 2009",
      client: "Johnson",
      charge: "Endeavoring to Manufacture Meth",
      outcome: "Case Dismissed",
      detail: "The state of Oklahoma offered Mr. Cagle's client ten (10) years in the department of corrections. Mr. Cagle felt the state could not make their case against his client. On 10/19/2009 a district judge agreed with Mr. Cagle but ruled the state had proven his client had possessed a controlled drug. Mr. Cagle disagreed and upon a further ruling by another district judge the case was ultimately dismissed on 11/10/2009.",
    },
    {
      year: "September 2009",
      client: "Delatore",
      charge: "Manufacturing Meth, Possession of Controlled Drug",
      outcome: "Case Dismissed",
      detail: "The state of Oklahoma offered Mr. Cagle's client ten (10) years in the Department of Corrections. Mr. Cagle felt the police illegally entered his client's apartment. The Judge at the Preliminary Hearing agreed with Mr. Cagle and suppressed the evidence. Case dismissed.",
    },
    {
      year: "September 2009",
      client: "Hardester",
      charge: "Endeavoring to Manufacture Meth, Possession of Controlled Drug, Unlawful Use of Surveillance Equipment, Possession of Drug Paraphernalia",
      outcome: "Illegal Search Warrant",
      detail: "Mr. Cagle's client had numerous prior felony convictions and was facing multiple life sentences. The state of Oklahoma offered Mr. Cagle's client 30 years in the department of corrections. Mr. Cagle felt the police had illegally obtained a search warrant to search his client's home. Mr. Cagle filed the appropriate motions and the court agreed the police had acted improperly. The State of Oklahoma was left with zero evidence and dismissed.",
    },
    {
      year: "March 2008",
      client: "Strahm",
      charge: "3 Counts of Violation of a Protective Order",
      outcome: "3 Acquittals",
      detail: "The State of Oklahoma wanted Mr. Cagle's client to do a year in the Tulsa County Jail. After the jury deliberated for fifteen (15) minutes Mr. Cagle's client walked out of the courtroom a free man with three (3) acquittals.",
    },
  ];

  return (
    <section id="case-results" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/98 to-[#0A0A0B]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Case <span className="text-[#2E5BFF]">Results</span>
          </h2>
          <p className="text-xl text-[#8E9196] max-w-2xl mx-auto mb-8">
            A proven track record of victories. Real cases, real results, real freedom.
          </p>
          <div className="inline-block backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-full px-6 py-2">
            <p className="text-[#2E5BFF] font-semibold">Click on any case to view details</p>
          </div>
        </motion.div>

        {/* Case Results List */}
        <div className="space-y-4">
          {caseResults.map((result, index) => (
            <CaseCard key={`${result.client}-${index}`} result={result} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Could Your Case Be Next?
          </h3>
          <p className="text-[#8E9196] mb-6 max-w-xl mx-auto">
            Every case is unique, but our commitment to aggressive defense remains constant. Contact us for a free consultation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#2E5BFF] text-white px-8 py-3 rounded-full hover:bg-[#2E5BFF]/90 transition-all"
          >
            Get Your Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
