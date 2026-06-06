import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";

interface BusinessCard {
  id: number;
  name: string;
  company: string;
  title: string;
  specialty: string;
  initials: string;
  tone: string;
  bio: string;
  category: string;
  location: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
    imports: [
    CommonModule,
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    RouterLink,
]})
export class ProfilePage implements OnInit {
[x: string]: any;
  card: BusinessCard | undefined;
  activeTab: 'ads' | 'needs' = 'ads';
  showContactCard = false;

  contactInfo = {
    phone: '+91 98765 43210',
    email: 'hello@abcconstruction.in',
    address: '12, Anna Salai, Chennai, Tamil Nadu',
  };

  needs = [
    { title: 'Labor Needed', detail: '2 masons and 4 helpers for urgent site work.', tag: 'Urgent', tone: 'labour' },
    { title: 'Material Needed', detail: 'Steel rods, cement bags, and electrical fittings.', tag: 'Supply', tone: 'material' },
    { title: 'Tutor Needed', detail: 'Math and English tutor for evening classes.', tag: 'Learning', tone: 'tutor' },
  ];

  cards: BusinessCard[] = [
    { id: 1, name: 'Ava Stone', company: 'ABC Construction', title: 'Business Owner', specialty: 'Residential and commercial building services.', initials: 'AC', tone: 'soft-mauve', bio: 'Premium construction and fit-out solutions for modern spaces.', category: 'Construction', location: 'Chennai' },
    { id: 2, name: 'Noah Reed', company: 'Smart Tech Solutions', title: 'Product Designer', specialty: 'Custom web and mobile development.', initials: 'ST', tone: 'red-accent', bio: 'Fast-growing software partner for startups and brands.', category: 'Software', location: 'Bangalore' },
    { id: 3, name: 'Mia Chen', company: 'Green Farms', title: 'Partnership Lead', specialty: 'Organic farm products supplier.', initials: 'GF', tone: 'warm-gold', bio: 'Fresh produce and sustainable sourcing for modern retail.', category: 'Agriculture', location: 'Coimbatore' },
    { id: 4, name: 'Leo Patel', company: 'Studio Harbor', title: 'Marketing Consultant', specialty: 'Campaign design and brand growth.', initials: 'SH', tone: 'soft-mauve', bio: 'Creative consulting for premium campaigns and launch plans.', category: 'Marketing', location: 'Delhi' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.card = this.cards.find((item) => item.id === id);
  }
}
