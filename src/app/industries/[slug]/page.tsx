import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { getIndustryPageData } from "@/lib/industry-adapter";
import { IndustryHero } from "@/components/industry/IndustryHero";
import { FrictionMap } from "@/components/industry/FrictionMap";
import { ValueReadinessMatrix } from "@/components/industry/ValueReadinessMatrix";
import { UseCaseAccordions } from "@/components/industry/UseCaseAccordions";
import { IndustryBottomCta } from "@/components/industry/IndustryBottomCta";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getIndustryPageData(slug);
  if (!data) return {};

  return {
    title: `AI ROI in ${data.name}`,
    description: `Discover how ${data.name} firms are reclaiming ${data.totalValueOpportunity} in trapped value with AI. Free customized assessment.`,
    openGraph: {
      images: [data.ogImage],
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getIndustryPageData(slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <IndustryHero data={data} />
      <FrictionMap lifecycle={data.lifecycle} />
      <ValueReadinessMatrix useCases={data.useCases} />
      <UseCaseAccordions useCases={data.useCases} />
      <IndustryBottomCta
        industryName={data.name}
        industrySlug={data.slug}
      />
    </>
  );
}
