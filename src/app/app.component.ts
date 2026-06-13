import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Metric {
    value: string;
    label: string;
    detail: string;
}

interface Service {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    accent: string;
}

interface Partner {
    initials: string;
    name: string;
    role: string;
    bio: string;
    creds: string[];
    location: string;
    linkText: string;
    link: string;
}

interface Insight {
    badge?: string;
    type: string;
    title: string;
    excerpt: string;
    author: string;
    meta: string;
    linkText: string;
    link: string;
    featured?: boolean;
}

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    menuOpen = false;
    submitted = false;
    formSending = false;
    showSuccessPopup = false;
    formStatus = '';
    currentYear = new Date().getFullYear();

    enquiry = {
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
    };

    readonly navItems = [
        { label: 'About', anchor: 'about' },
        { label: 'Services', anchor: 'services' },
        { label: 'Partners', anchor: 'team' },
        { label: 'Insights', anchor: 'insights' },
        { label: 'Contact', anchor: 'contact' }
    ];

    readonly metrics: Metric[] = [
        { value: '18+', label: 'Years', detail: 'continuous CA practice since 2007' },
        { value: '2', label: 'Markets', detail: 'India headquarters + Luxembourg EU office' },
        { value: '3', label: 'Partners', detail: 'ICAI-qualified leadership across India and Europe' },
        { value: '500+', label: 'Clients', detail: 'businesses, NRIs, promoters and institutions served' }
    ];

    readonly trustStrip = [
        'ICAI Fellow Members',
        'ICAEW Qualified Partner',
        'CPA Qualified Partner',
        'IICA Independent Director Panel',
        'ICAI Luxembourg Chapter President'
    ];

    readonly services: Service[] = [
        {
            icon: '⚖️',
            title: 'Tax Litigation & Advisory',
            accent: 'Assessment to appeal',
            description: 'Notice replies, assessment strategy, reassessment proceedings, CIT(A) and ITAT representation supported by precise legal research and documentation.',
            tags: ['Sec. 142(1)', 'Sec. 148', 'CIT(A)', 'ITAT']
        },
        {
            icon: '🌍',
            title: 'International Taxation',
            accent: 'India–EU structuring',
            description: 'Transfer pricing, DTAA positions, FEMA, ODI and inbound India advisory for founders, European businesses and Indian groups expanding overseas.',
            tags: ['DTAA', 'FEMA/ODI', 'TP Study', 'India Entry']
        },
        {
            icon: '🧳',
            title: 'NRI Taxation & FEMA',
            accent: 'Global Indian families',
            description: 'NRI ITR, Form 67, NRO/NRE compliance, capital gains planning, repatriation and FEMA-aligned investment structuring.',
            tags: ['NRI ITR', 'Form 67', 'NRO/NRE', 'Repatriation']
        },
        {
            icon: '📊',
            title: 'Audit & Assurance',
            accent: 'Clean reporting',
            description: 'Statutory audits, tax audits, internal audits, trust audits, bank audits, GST audit support and forensic review assignments.',
            tags: ['CARO 2020', 'IFC', 'Tax Audit', 'Bank Audit']
        },
        {
            icon: '🏛️',
            title: 'Company Law & Governance',
            accent: 'Board-ready compliance',
            description: 'Incorporation, MCA/ROC filings, share capital restructuring, board processes, EGM support and governance advisory.',
            tags: ['Companies Act', 'MCA/ROC', 'Board Support', 'SEBI']
        },
        {
            icon: '💼',
            title: 'Virtual CFO Services',
            accent: 'Finance leadership',
            description: 'MIS reporting, budgeting, cash-flow control, investor-ready financials, board decks and strategic finance support on retainer.',
            tags: ['MIS', 'Budgeting', 'Cash Flow', 'Investor Decks']
        },
        {
            icon: '🔁',
            title: 'Accounting Outsourcing',
            accent: 'Reliable operations',
            description: 'Bookkeeping, payroll, reconciliations, reporting calendars and compliance operations across Tally, QuickBooks and cloud systems.',
            tags: ['Tally', 'QuickBooks', 'Payroll', 'Bookkeeping']
        },
        {
            icon: '🛡️',
            title: 'Risk & Management Consulting',
            accent: 'Controls that scale',
            description: 'Internal controls, policy design, process reviews, governance maturity assessments and management reporting frameworks.',
            tags: ['Controls', 'Risk Advisory', 'SOPs', 'Governance']
        }
    ];

    readonly differentiators = [
        ['A real India–EU presence', 'Nagpur-based execution with Luxembourg-based partner access for cross-border matters.'],
        ['Partner-led advisory', 'Senior CA involvement in strategy, submissions, review and client communication.'],
        ['Litigation + compliance depth', 'Practical experience across tax notices, audits, ROC, FEMA, GST and reporting assignments.'],
        ['Boardroom perspective', 'Independent Director empanelment and governance experience support high-stakes decisions.']
    ];

    readonly corridor = [
        'ODI advisory',
        'India entry strategy',
        'Cross-border M&A',
        'GIFT City IFSC',
        'Transfer pricing',
        'Fund accounting'
    ];

    readonly process: ProcessStep[] = [
        {
            step: '01',
            title: 'Diagnose',
            description: 'We map the issue, facts, timelines, notices, financial records and regulatory exposure.'
        },
        {
            step: '02',
            title: 'Design',
            description: 'We build a clear advisory route with documentation, compliance steps and decision points.'
        },
        {
            step: '03',
            title: 'Execute',
            description: 'Partner-led filing, representation, reporting or implementation with status visibility.'
        },
        {
            step: '04',
            title: 'Protect',
            description: 'We close gaps through controls, calendars, SOPs and ongoing review where needed.'
        }
    ];

    readonly partners: Partner[] = [
        {
            initials: 'MK',
            name: 'CA Minhaj Majid Khan',
            role: 'Founding & Managing Partner',
            location: 'Nagpur, India',
            bio: 'Fellow member of ICAI with 18+ years of practice across income tax litigation, company law, international taxation and corporate advisory. Empanelled as an Independent Director under IICA and experienced in board-level governance.',
            creds: ['FCA — ICAI', 'IICA — Independent Director', 'Tax Litigation', 'Corporate Advisory'],
            linkText: 'LinkedIn Profile',
            link: 'https://www.linkedin.com/in/ca-minhaj-majid-khan-0b71339/'
        },
        {
            initials: 'SS',
            name: 'CA Sagar C. Soman',
            role: 'Partner — NRI & Cross-Border Finance',
            location: 'India / Global NRI Desk',
            bio: 'Fellow member of ICAI and DISA with Masters in International Business Studies from Leeds Metropolitan University, UK. Prior experience includes PwC Indirect Tax and Economic Law Practice International Trade Law.',
            creds: ['FCA — ICAI', 'DISA', 'Ex-PwC', 'Ex-ELP', 'NRI Advisory'],
            linkText: 'LinkedIn Profile',
            link: 'https://www.linkedin.com/in/sagarsoman'
        },
        {
            initials: 'AL',
            name: 'CA Anjani Kumar Ladia',
            role: 'Partner-in-Charge, Luxembourg (EU)',
            location: 'Luxembourg, EU',
            bio: 'Fellow member of ICAI, ICAEW-qualified and CPA member with 25+ years in fund accounting, statutory audits and compliance across India and Europe. President of the ICAI Luxembourg Chapter.',
            creds: ['FCA — ICAI', 'ICAEW — UK', 'CPA', 'IQ-EQ Luxembourg', 'ICAI Lux President'],
            linkText: 'LinkedIn Profile',
            link: 'https://www.linkedin.com/in/anjaniladia/'
        }
    ];

    readonly insights: Insight[] = [
        {
            badge: 'Featured',
            type: 'Corporate Governance & Audit',
            title: 'Lessons Learned from Satyam to Rajesh Exports',
            excerpt: 'A professional review of audit failures, red flags, SA 240, SA 315, SA 550 and the heightened responsibility of modern auditors.',
            author: 'CA Minhaj Majid Khan',
            meta: 'June 2026',
            linkText: 'Download PDF ↗',
            link: 'assets/lessons_learned.pdf',
            featured: true
        },
        {
            type: 'Cross-Border Advisory',
            title: 'Europe–India GCC Expansion: Regulatory & Governance Insights',
            excerpt: 'How European organisations evaluate India entry, required governance structures and the Luxembourg–India corridor advantage.',
            author: 'CA Anjani Kumar Ladia',
            meta: 'GCC Summit 2025',
            linkText: 'Watch ↗',
            link: 'https://www.youtube.com/watch?v=E9h-gR3lqKU'
        },
        {
            type: 'NRI Taxation',
            title: 'NRI Tax Season: Is Your ITR Filing Obligation Optional?',
            excerpt: 'A practical checklist for NRIs on Indian filing requirements, foreign income positions and FEMA compliance obligations.',
            author: 'CA Sagar Soman',
            meta: '2025',
            linkText: 'Read ↗',
            link: 'https://www.linkedin.com/posts/sagarsoman_nris-tax-season-is-on-are-you-compliant-activity-7327550608968732674-TNGG'
        },
        {
            type: 'NRI Taxation · DTAA',
            title: 'Mutual Fund Gains May Not Be Taxable in India',
            excerpt: 'How certain DTAA provisions can help eligible NRIs reduce or eliminate Indian capital gains tax on mutual fund redemptions.',
            author: 'CA Sagar Soman',
            meta: '2025',
            linkText: 'Read ↗',
            link: 'https://www.linkedin.com/posts/sagarsoman_mutual-fund-gains-taxable-in-india-not-always-activity-7317773672440610816-72j7'
        }
    ];

    serviceOptions = this.services.map(service => service.title);

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu(): void {
        this.menuOpen = false;
    }

    submitEnquiry(): void {
        this.submitted = false;
        this.formStatus = '';
        this.formSending = true;

        const controller = new AbortController();

        const timeout = setTimeout(() => {
            controller.abort();
        }, 15000);

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.enquiry),
            signal: controller.signal
        })
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Something went wrong.');
                }

                return data;
            })
            .then(data => {
                this.submitted = true;
                this.formStatus = data.message || 'Your enquiry has been sent successfully.';

                this.showSuccessPopup = true;

                this.enquiry = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    service: '',
                    message: ''
                };
            })
            .catch(error => {
                this.submitted = false;

                if (error.name === 'AbortError') {
                    this.formStatus = 'Email server took too long to respond. Please check backend terminal.';
                } else {
                    this.formStatus = error.message || 'Unable to send enquiry. Please try again.';
                }
            })
            .finally(() => {
                clearTimeout(timeout);
                this.formSending = false;
            });
    }

    closeSuccessPopup(): void {
        this.showSuccessPopup = false;
    }
}