import { ChangeDetectionStrategy, Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {

  downloadResume(){
    const fileUrl = 'assets/Mrs.Yamin.pdf'; 
    const fileName = 'Ms.Yamin May.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
  workExperiences = [
    { 
      year: '2023 — PRESENT', 
      title: 'System Analyst', 
      company: 'Qualcomm , Collabera Digital', 
      description: 'Developed, maintained, and shipped production code for critical components used in semiconductor business. Work closely with cross-functional teams, including product owners,product managers, scrum master, developers and designers within a Scrum framework for project management and collaboration.' ,
      technologies: ['C#', 'ASP.NET', 'ASP.NET Core', 'MSSQL', 'Azure DevOps']
    },
    { 
      year: '2022 — 2023', 
      title: 'Software Developer <Backend>', 
      company: 'Onepay', 
      description: 'Developed and maintained payment systems and banking applications for FinTech Inc. Worked with the UI team to engineer and improve major features of Onepay app.', 
      technologies: ['C#', 'ASP.NET', 'ASP.NET Core', 'SQL', 'REST APIs'] 
    },
    { 
      year: '2017 — 2022', 
      title: 'Web Application Developer', 
      company: 'Myanmar High Society', 
      description: 'Build, style, and ship high-quality e-commerce app, websites, design systems, and digital experiences for a diverse array of projects for clients.', 
      technologies: ['C#', 'ASP.NET', 'ASP.NET Core','Ruby on Rails','Angular','MSSQL','SQL','Git'] 
    },
  ];

  projects = [
    {
      title: 'Onepay App',
      description: 'Mobile money app, e-wallet financial services offers a digital experience and lets you store, transfer, and spend money straight from your smartphone',
      image: 'assets/onepaytrs.png', 
      technologies: ['.NET', '.NET Core','Web APIs'],
      link: '',
    },
    {
      title: 'Shopdoora e-Commerce App',
      description: 'An e-commerce solution with real-time analytics and a user-friendly interface. It offers an intuitive e-commerce system for buyers and ellers.',
      // description: 'An e-commerce solution with real-time analytics and a user-friendly interface. It offers an intuitive e-commerce system that allows buyers to purchase through various integrated payment platforms. Sellers can conveniently check all orders and payment information through the dedicated seller app.',
      image: 'assets/shopdoorats.png',
      technologies: ['.NET Core','Web APIs'],
      link: ''
    }
    ,
    {
      title: 'BCA Web App',
      description: 'Building and construction authority (e-Services) for the Singapore Government.',
      image: 'assets/bca.png',
      technologies: ['.NET','Web APIs','Angular'],
      link: ''
    }
  ];
}
