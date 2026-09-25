import { AlertTriangle, Building2, Camera, ClipboardCheck, FileText, HardHat, LayoutDashboard, PackageCheck, Settings, ShoppingCart, Truck, Users, Bell, ChartNoAxesColumn, Contact, type LucideIcon } from "lucide-react";

export type NavItem = { label: string; to: string; icon: LucideIcon };
export const navItems: NavItem[] = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Projects", to: "/projects", icon: Building2 },
  { label: "Visitor Log", to: "/visitors", icon: Contact },
  { label: "Orders", to: "/orders", icon: ShoppingCart },
  { label: "Deliveries", to: "/deliveries", icon: Truck },
  { label: "Drawings", to: "/drawings", icon: FileText },
  { label: "Site Photos", to: "/photos", icon: Camera },
  { label: "Issues / Snagging", to: "/issues", icon: AlertTriangle },
  { label: "Daily Reports", to: "/daily-reports", icon: ClipboardCheck },
  { label: "People", to: "/people", icon: Users },
  { label: "Suppliers", to: "/suppliers", icon: HardHat },
  { label: "Notifications", to: "/notifications", icon: Bell },
  { label: "Reports", to: "/reports", icon: ChartNoAxesColumn },
  { label: "Settings", to: "/settings", icon: Settings },
];

export const projects = [
  { name: "ARK Riverside Development", code: "ARK-RIV-024", location: "Richmond, London", status: "On programme", progress: 68, budget: "£8.4m", manager: "James Whitmore" },
  { name: "Chelsea Residential Refurbishment", code: "ARK-CHS-011", location: "Chelsea, London", status: "Attention", progress: 42, budget: "£2.15m", manager: "Amelia Hart" },
  { name: "Croydon Commercial Project", code: "ARK-CRY-018", location: "Croydon, London", status: "On programme", progress: 81, budget: "£5.7m", manager: "Darren Cole" },
];

export const visitors = [
  { name: "Michael Osei", company: "Apex Scaffolding Ltd", type: "Contractor", time: "07:14", host: "Darren Cole", status: "On site" },
  { name: "Sarah Bennett", company: "Bennett Fire Consultancy", type: "Visitor", time: "08:05", host: "James Whitmore", status: "On site" },
  { name: "Tomasz Kowalski", company: "TK Electrical", type: "Contractor", time: "07:32", host: "Lee Morgan", status: "On site" },
  { name: "Priya Shah", company: "ARK Construction", type: "Staff", time: "07:02", host: "Site office", status: "On site" },
];

export const orders = [
  { id: "PO-2481", item: "SFS track and studs — Level 04", supplier: "Buildbase London", qty: "240 lengths", cost: "£4,860.00", required: "29 Sep 2026", status: "IN TRANSIT", priority: "High" },
  { id: "PO-2479", item: "C30 concrete, pump mix", supplier: "London Concrete", qty: "18 m³", cost: "£2,376.00", required: "30 Sep 2026", status: "SUPPLIER CONFIRMED", priority: "Normal" },
  { id: "REQ-2510", item: "Fire-rated plasterboard 15mm", supplier: "Pending review", qty: "120 sheets", cost: "£1,944.00", required: "02 Oct 2026", status: "UNDER REVIEW", priority: "Normal" },
  { id: "PO-2468", item: "Temporary edge protection", supplier: "HSS Hire", qty: "1 lot", cost: "£685.00", required: "25 Sep 2026", status: "PARTIALLY DELIVERED", priority: "Urgent" },
];

export const deliveries = [
  { supplier: "Jewson", ref: "PO-2474", vehicle: "LX24 KWE", due: "08:30", arrival: "08:21", status: "RECEIVED", contents: "Facing bricks — 14 pallets" },
  { supplier: "Travis Perkins", ref: "PO-2480", vehicle: "Pending", due: "10:45", arrival: "—", status: "EXPECTED", contents: "Plywood sheets and CLS timber" },
  { supplier: "London Concrete", ref: "PO-2479", vehicle: "Pending", due: "13:00", arrival: "—", status: "CONFIRMED", contents: "C30 concrete — 18 m³" },
];

export const drawings = [
  { number: "E-302", title: "Level 03 Small Power Layout", discipline: "Electrical", revision: "REV 08", state: "CURRENT", date: "24 Sep 2026", by: "Vector MEP" },
  { number: "A-142", title: "Block B GA Plan — Level 04", discipline: "Architectural", revision: "REV 12", state: "CURRENT", date: "22 Sep 2026", by: "Northline Architects" },
  { number: "S-205", title: "RC Frame Details — Core 2", discipline: "Structural", revision: "REV 05", state: "CURRENT", date: "18 Sep 2026", by: "Walsh Structures" },
  { number: "E-302", title: "Level 03 Small Power Layout", discipline: "Electrical", revision: "REV 07", state: "SUPERSEDED", date: "12 Sep 2026", by: "Vector MEP" },
];

export const issues = [
  { id: "SN-184", title: "Fire stopping incomplete above riser door", location: "Block B · Level 03 · Riser B3", priority: "Critical", assignee: "Pyroguard Ltd", due: "24 Sep 2026", status: "IN PROGRESS", overdue: true },
  { id: "SN-181", title: "Damaged powder coat to balcony balustrade", location: "Block A · Level 05 · Flat A5.03", priority: "Medium", assignee: "Metalform UK", due: "28 Sep 2026", status: "ASSIGNED", overdue: false },
  { id: "SN-176", title: "Incorrect tile setting out at shower niche", location: "Block C · Level 02 · Flat C2.08", priority: "High", assignee: "Precision Tiling", due: "26 Sep 2026", status: "READY FOR INSPECTION", overdue: false },
];

export const photos = [
  { label: "Block B façade progress", meta: "Block B · Level 05 · Progress", date: "Today, 09:42" },
  { label: "Riser fire stopping", meta: "Block B · Level 03 · Defect", date: "Today, 08:18" },
  { label: "Concrete delivery inspection", meta: "Loading bay · Delivery", date: "Yesterday, 13:26" },
  { label: "Apartment first fix", meta: "Block A · Level 04 · Installation", date: "Yesterday, 11:03" },
];

export const people = [
  { name: "James Whitmore", role: "Project Manager", company: "ARK Construction", project: "Riverside", status: "Active" },
  { name: "Amelia Hart", role: "Site Manager", company: "ARK Construction", project: "Chelsea", status: "Active" },
  { name: "Darren Cole", role: "Site Manager", company: "ARK Construction", project: "Croydon", status: "Active" },
  { name: "Leah Grant", role: "Procurement", company: "ARK Construction", project: "All projects", status: "Active" },
];

export const suppliers = [
  { name: "Buildbase London", trade: "General materials", contact: "Martin Ellis", phone: "020 7946 0821", rating: "Approved" },
  { name: "Vector MEP Ltd", trade: "M&E design", contact: "Hannah Reed", phone: "020 8123 4410", rating: "Preferred" },
  { name: "Pyroguard Ltd", trade: "Fire stopping", contact: "Dean Wallace", phone: "0161 496 1182", rating: "Approved" },
];