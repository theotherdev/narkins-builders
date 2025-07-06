// src/pages/blog/[slug].tsx - SIMPLIFIED VERSION
import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getAllPostsServer, getPostBySlugServer } from '../../lib/blog-server'
import { BlogPost } from '../../lib/blog'
import BlogLayout from '../../components/blog/blog-layout'

// Import all the missing components
import {
  AnimatedCounter,
  MarketTimingIndicator,
  TrendArrow,
  CallNowButton,
  ProgressBar,
  ConfidenceMeter,
  TabbedContent,
  CallToAction,
  PropertyCard,
  MarketTable,
  LivePricing,
  LocationDistanceMap,
  PriceTrendChart,
  AffordabilityCalculator,
  ConsultationBooking,
  AmenitiesMap,
  BudgetCalculator,
  BuyingProcessTimeline,
  InvestmentComparison,
  RiskIndicator,
  FirstTimeBuyerIndicator,
  TargetBuyerAnalysis,
  FloorPlanViewer,
  LayoutOptimizer,
  ROICalculator,
  PerformanceChart
} from '../../components/blog'

interface BlogPostProps {
  post: BlogPost
  mdxSource: MDXRemoteSerializeResult
}

// Simple placeholder components for missing ones
const PropertyComparison = ({ project1, project2, consultationCTA }: any) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">Project Comparison</h4>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border-r md:pr-6">
        <h5 className="font-medium text-blue-600 mb-2">{project1.name}</h5>
        <div className="space-y-2 text-sm">
          <div><strong>Type:</strong> {project1.type}</div>
          <div><strong>Status:</strong> {project1.status}</div>
        </div>
      </div>
      <div>
        <h5 className="font-medium text-green-600 mb-2">{project2.name}</h5>
        <div className="space-y-2 text-sm">
          <div><strong>Type:</strong> {project2.type}</div>
          <div><strong>Status:</strong> {project2.status}</div>
        </div>
      </div>
    </div>
    <div className="mt-6 text-center">
      <CallNowButton phone={consultationCTA} text="Get Detailed Comparison" />
    </div>
  </div>
);

const ROIPieChart = ({ data, title }: any) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
    <div className="space-y-3">
      {data.map((item: any, index: number) => (
        <div key={index} className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center">
            <div 
              className="w-4 h-4 rounded mr-3" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm">{item.category}</span>
          </div>
          <span className="font-semibold">{item.percentage}%</span>
        </div>
      ))}
    </div>
  </div>
);

const FinancingComparison = ({ options }: any) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
    <h4 className="font-semibold text-gray-900 p-6 border-b">Financing Options</h4>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Option</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Down Payment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {options.map((option: any, index: number) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{option.type}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{option.downPayment}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{option.interestRate || option.profitRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Add other simple placeholder components as needed
const MortgageCalculator = ({ title }: any) => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-blue-900 mb-4">{title}</h4>
    <p>Mortgage calculator functionality - contact for detailed calculations</p>
    <CallNowButton phone="+923203243970" text="Get Calculation" />
  </div>
);

const MarketOpportunityAlert = ({ status, factors }: any) => (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
    <h4 className="font-medium text-yellow-800">Market Opportunity: {status}</h4>
    <ul className="list-disc list-inside text-sm text-yellow-700 mt-2">
      {factors.map((factor: string, index: number) => (
        <li key={index}>{factor}</li>
      ))}
    </ul>
  </div>
);

const ExpertConsultation = ({ experts, contactNumber }: any) => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-blue-900 mb-4">Expert Consultation</h4>
    <div className="space-y-2 mb-4">
      {experts.map((expert: any, index: number) => (
        <div key={index} className="text-sm">
          <strong>{expert.name}:</strong> {expert.expertise}
        </div>
      ))}
    </div>
    <CallNowButton phone={contactNumber} text="Book Consultation" />
  </div>
);

const CompanyCredentials = ({ experience, projects, satisfaction }: any) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
    <h4 className="font-semibold text-gray-900 mb-4">Why Choose Narkin's Builders</h4>
    <div className="grid md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-xl font-bold text-blue-600">{experience}</div>
        <div className="text-sm text-gray-600">Experience</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-green-600">{projects}</div>
        <div className="text-sm text-gray-600">Projects</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-purple-600">{satisfaction}</div>
        <div className="text-sm text-gray-600">Satisfaction</div>
      </div>
    </div>
  </div>
);

const FloatingContact = ({ phone }: any) => (
  <div className="fixed bottom-6 right-6 z-50">
    <CallNowButton phone={phone} text="Contact" />
  </div>
);

// Enhanced PropertyCard for the component
const PropertyCardEnhanced = (props: any) => <PropertyCard {...props} />;

// ✅ MDX components mapping
const components = {
  // Basic HTML elements
  h1: (props: any) => <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-gray-700 leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700" {...props} />,
  li: (props: any) => <li className="text-gray-700 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:text-blue-800 hover:underline font-medium" {...props} />,
  
  // Enhanced table styling
  table: (props: any) => (
    <div className="overflow-x-auto my-8 shadow-lg rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg bg-white" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-gradient-to-r from-blue-50 to-blue-100" {...props} />,
  tbody: (props: any) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
  tr: (props: any) => <tr className="hover:bg-gray-50 transition-colors" {...props} />,
  th: (props: any) => <th className="px-6 py-4 text-left text-sm font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200" {...props} />,
  td: (props: any) => <td className="px-6 py-4 text-sm text-gray-900 font-medium" {...props} />,

  // Custom components
  AnimatedCounter,
  MarketTimingIndicator,
  TrendArrow,
  CallNowButton,
  ProgressBar,
  ConfidenceMeter,
  TabbedContent,
  CallToAction,
  PropertyCard,
  PropertyCardEnhanced,
  MarketTable,
  LivePricing,
  LocationDistanceMap,
  PriceTrendChart,
  AffordabilityCalculator,
  ConsultationBooking,
  PropertyComparison,
  ROIPieChart,
  FinancingComparison,
  MortgageCalculator,
  MarketOpportunityAlert,
  ExpertConsultation,
  CompanyCredentials,
  FloatingContact,
  // All the missing components
  AmenitiesMap,
  BudgetCalculator,
  BuyingProcessTimeline,
  InvestmentComparison,
  RiskIndicator,
  FirstTimeBuyerIndicator,
  TargetBuyerAnalysis,
  FloorPlanViewer,
  LayoutOptimizer,
  ROICalculator,
  PerformanceChart
}

export default function BlogPost({ post, mdxSource }: BlogPostProps) {
  return (
    <BlogLayout post={post}>
      <div className="prose prose-lg max-w-none mx-auto">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </BlogLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPostsServer()
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getPostBySlugServer(slug)

  if (!post) {
    return {
      notFound: true
    }
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
  })

  return {
    props: {
      post,
      mdxSource
    },
    revalidate: 60
  }
}