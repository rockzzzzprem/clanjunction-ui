import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

interface BusinessCard {
  id: number;
  name: string;
  designation: string;
  company: string;
  title: string;
  specialty: string;
  industry: string;
  tone: string;
  template: 'modern' | 'luxury' | 'tech' | 'warm' | 'sapphire' | 'crimson' | 'aurora' | 'ocean' | 'forest' | 'ember' | 'violet' | 'mint';
  section: 'cards' | 'proposals';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonIcon],
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild('promoTrack') promoTrack?: ElementRef<HTMLElement>;

  activeTab: 'cards' | 'proposals' = 'cards';
  searchTerm = '';
  activePromoIndex = 0;
  private autoScrollInterval?: any;

  cards: BusinessCard[] = [
    {
      id: 1, name: 'Keerthana', company: 'Sanju Sarees', title: 'Brand Strategist', specialty: 'Creative direction', industry: 'Marketing', tone: 'sapphire', template: 'sapphire', section: 'cards',
      designation: 'Head of Marketing'
    },
    {
      id: 2, name: 'Noah Reed', company: 'Pixel Forge', title: 'Product Designer', specialty: 'UI systems', industry: 'Software', tone: 'crimson', template: 'crimson', section: 'cards',
      designation: ''
    },
    {
      id: 3, name: 'Mia Chen', company: 'Northline', title: 'Partnership Lead', specialty: 'Client growth', industry: 'Finance', tone: 'aurora', template: 'aurora', section: 'cards',
      designation: ''
    },
    {
      id: 4, name: 'Leo Patel', company: 'Studio Harbor', title: 'Marketing Consultant', specialty: 'Campaign design', industry: 'Construction', tone: 'ocean', template: 'ocean', section: 'cards',
      designation: ''
    },
    {
      id: 5, name: 'Sara Kim', company: 'Harbor & Co.', title: 'Growth Lead', specialty: 'Partnerships', industry: 'Marketing', tone: 'forest', template: 'forest', section: 'cards',
      designation: ''
    },
    {
      id: 6, name: 'Daniel Ross', company: 'BrightLoop', title: 'Frontend Engineer', specialty: 'Design systems', industry: 'Software', tone: 'ember', template: 'ember', section: 'cards',
      designation: ''
    },
    {
      id: 7, name: 'Elena Cruz', company: 'Summit One', title: 'Client Advisor', specialty: 'B2B outreach', industry: 'Finance', tone: 'violet', template: 'violet', section: 'cards',
      designation: ''
    },
    {
      id: 8, name: 'Marcus Lee', company: 'Cedar Works', title: 'Operations Director', specialty: 'Workflow design', industry: 'Construction', tone: 'mint', template: 'mint', section: 'cards',
      designation: ''
    },
    {
      id: 9, name: 'Priya Shah', company: 'Nova Atelier', title: 'Creative Director', specialty: 'Visual identity', industry: 'Marketing', tone: 'sapphire', template: 'modern', section: 'cards',
      designation: ''
    },
    {
      id: 10, name: 'Owen Grant', company: 'ForgeStack', title: 'Product Lead', specialty: 'AI workflows', industry: 'Software', tone: 'crimson', template: 'tech', section: 'cards',
      designation: ''
    },
    {
      id: 11, name: 'Nina Brooks', company: 'Peakline', title: 'Strategy Partner', specialty: 'Market expansion', industry: 'Finance', tone: 'aurora', template: 'luxury', section: 'cards',
      designation: ''
    },
    {
      id: 12, name: 'Jules Carter', company: 'Urban Frame', title: 'Design Consultant', specialty: 'Retail spaces', industry: 'Construction', tone: 'ocean', template: 'warm', section: 'cards',
      designation: ''
    },
    {
      id: 13, name: 'Amara White', company: 'Horizon Labs', title: 'Research Analyst', specialty: 'Consumer trends', industry: 'Marketing', tone: 'forest', template: 'sapphire', section: 'proposals',
      designation: ''
    },
    {
      id: 14, name: 'Lucas Reed', company: 'Bluebird Tech', title: 'Mobile Developer', specialty: 'App delivery', industry: 'Software', tone: 'ember', template: 'crimson', section: 'proposals',
      designation: ''
    },
    {
      id: 15, name: 'Chloe Nguyen', company: 'Northstar Capital', title: 'Finance Partner', specialty: 'Portfolio strategy', industry: 'Finance', tone: 'violet', template: 'aurora', section: 'proposals',
      designation: ''
    },
    {
      id: 16, name: 'Ethan Ward', company: 'Stonepeak', title: 'Build Consultant', specialty: 'Project planning', industry: 'Construction', tone: 'mint', template: 'ocean', section: 'proposals',
      designation: ''
    },
    {
      id: 17, name: 'Lily Fernandez', company: 'Aster Studio', title: 'Brand Consultant', specialty: 'Campaign stories', industry: 'Marketing', tone: 'sapphire', template: 'forest', section: 'proposals',
      designation: ''
    },
    {
      id: 18, name: 'Mason Hughes', company: 'Pioneer Cloud', title: 'Solutions Architect', specialty: 'Cloud platforms', industry: 'Software', tone: 'crimson', template: 'ember', section: 'proposals',
      designation: ''
    },
    {
      id: 19, name: 'Isabella Hall', company: 'Summit Bank', title: 'Partnership Manager', specialty: 'Client growth', industry: 'Finance', tone: 'aurora', template: 'violet', section: 'proposals',
      designation: ''
    },
    {
      id: 20, name: 'Caleb Moore', company: 'MetroBuild', title: 'Project Lead', specialty: 'Smart construction', industry: 'Construction', tone: 'ocean', template: 'mint', section: 'proposals',
      designation: ''
    },
  ];

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  get visibleCards(): BusinessCard[] {
    const term = this.searchTerm.trim().toLowerCase();

    // return this.cards.filter((card) => {
    //   const matchesTab = this.activeTab === 'cards' ? card.section === 'cards' : card.section === 'proposals';
    //   const matchesSearch = !term || [card.name, card.company, card.title, card.specialty].join(' ').toLowerCase().includes(term);
    //   return matchesTab && matchesSearch;
    // });
    return this.cards;
  }

  selectTab(tab: 'cards' | 'proposals'): void {
    this.activeTab = tab;
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  getIndustryIcon(industry: string): string {
    const map: Record<string, string> = {
      Construction: 'construct-outline',
      Chef: 'restaurant-outline',
      Software: 'code-slash-outline',
      Doctor: 'medical-outline',
      Lawyer: 'shield-checkmark-outline',
      Teacher: 'book-outline',
      Photographer: 'camera-outline',
      'Real Estate': 'home-outline',
      Marketing: 'megaphone-outline',
      Finance: 'bar-chart-outline',
      Designer: 'color-palette-outline',
    };

    return map[industry] ?? 'briefcase-outline';
  }

  getCardTemplate(card: BusinessCard): string {
    return `card-template ${card.template}`;
  }

  onPromoScroll(): void {
    const track = this.promoTrack?.nativeElement;
    if (!track) {
      return;
    }

    const cards = Array.from(track.querySelectorAll('.promo-card')) as HTMLElement[];
    if (!cards.length) {
      return;
    }

    const currentScroll = track.scrollLeft;
    const nearestIndex = cards.reduce((closestIndex, card, index) => {
      const cardLeft = card.offsetLeft;
      const distance = Math.abs(currentScroll - cardLeft);
      const closestDistance = Math.abs(currentScroll - cards[closestIndex].offsetLeft);

      return distance < closestDistance ? index : closestIndex;
    }, 0);

    this.activePromoIndex = nearestIndex;
  }

  private startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      const track = this.promoTrack?.nativeElement;
      if (!track) return;

      const cards = track.querySelectorAll('.promo-card');
      if (cards.length === 0) return;

      // Calculate next index (looping back to 0)
      const nextIndex = (this.activePromoIndex + 1) % cards.length;
      const targetCard = cards[nextIndex] as HTMLElement;

      track.scrollTo({
        left: targetCard.offsetLeft,
        behavior: 'smooth'
      });
    }, 5000);
  }

  private stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
