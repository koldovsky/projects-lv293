import { Injectable } from '@angular/core';

@Injectable()
export class StudentlistService {

  private studentList = [
    {
      "name": "Ihor Tymosevych",
      "websiteUrl": "",
      "codeSourceUrl": "",
      "cvUrl": "",
      "photoUrl": "assets/images/no-photo.gif"
    },
    {
      "name": "Iuliia Bliusovych",
      "websiteUrl": "https://bluesowitch.github.io/yourpersonaltranslator/",
      "codeSourceUrl": "https://github.com/bluesowitch/yourpersonaltranslator",
      "cvUrl": "https://www.linkedin.com/in/julia-bliusovych-1101226b/",
      "photoUrl": "assets/images/students/bliusovych.jpg"
    },
    {
      "name": "Ivan Afanasiev",
      "websiteUrl": "https://onechezzz.github.io/myProject/",
      "codeSourceUrl": "https://github.com/onechezzz/myProject/",
      "cvUrl": "",
      "photoUrl": "assets/images/no-photo.gif"
    },
    {
      "name": "Marian Semchyshyn",
      "websiteUrl": "https://maximusen.github.io/maximus-mtb-school/",
      "codeSourceUrl": "https://github.com/maximusen/maximus-mtb-school",
      "cvUrl": "https://www.linkedin.com/in/marian-semchyshyn/",
      "photoUrl": "assets/images/students/semchyshyn.jpg"
    },
    {
      "name": "Nazar Koval'",
      "websiteUrl": "https://geronimo-jenkins.github.io/mainproject/",
      "codeSourceUrl": "https://github.com/geronimo-jenkins/mainproject",
      "cvUrl": "https://www.linkedin.com/in/nazar-koval-5a60b9159/",
      "photoUrl": "assets/images/students/koval.jpg"
    },
    {
      "name": "Roman Havdo",
      "websiteUrl": "https://romanhavdo.github.io/htmlpersonal/",
      "codeSourceUrl": "https://github.com/RomanHavdo/htmlpersonal",
      "cvUrl": "https://www.linkedin.com/in/roman-havdo-081a2a158/",
      "photoUrl": "assets/images/students/havdo.png"
    },
    {
      "name": "Taras Samoylenko",
      "websiteUrl": "https://cos1715.github.io/StarWars/",
      "codeSourceUrl": "https://github.com/cos1715/StarWars",
      "cvUrl": "https://www.linkedin.com/in/taras-samoilenko-4a94a4150/",
      "photoUrl": "assets/images/students/samoilenko.png"
    },
    {
      "name": "Vadym Terpko",
      "websiteUrl": "",
      "codeSourceUrl": "",
      "cvUrl": "",
      "photoUrl": ""
    },
    {
      "name": "Yaryna Cherniak",
      "websiteUrl": "https://yarynacherniak.github.io/portfolio/",
      "codeSourceUrl": "https://github.com/YarynaCherniak/portfolio",
      "cvUrl": "https://www.linkedin.com/in/yaryna-cherniak-67aa30158/",
      "photoUrl": "assets/images/students/cherniak.jpg"
    },
    {
      "name": "Yuliia Mastyliak",
      "websiteUrl": "https://yuliamastyliak.github.io/My-project-2.0/",
      "codeSourceUrl": "https://github.com/yuliamastyliak/My-project-2.0",
      "cvUrl": "https://www.linkedin.com/in/yuliia-mastyliak-011b80158/",
      "photoUrl": "assets/images/students/mastyliak.jpg"
    },
    {
      "name": "Yuliya Zozulya",
      "websiteUrl": "https://zzozulia.github.io/personal-webpage/",
      "codeSourceUrl": "https://github.com/Zzozulia/personal-webpage/settings",
      "cvUrl": "https://www.linkedin.com/in/yuliya-zozulya-616782155/",
      "photoUrl": "assets/images/students/zozulya.jpg"
    },
    {
      "name": "Alder Campoverde",
      "websiteUrl": "https://alderjavier.github.io/casipersonal/",
      "codeSourceUrl": "https://github.com/alderjavier/casipersonal/",
      "cvUrl": "",
      "photoUrl": "assets/images/students/campoverde.jpg"
    },
    {
      "name": "Andrii Bashynskyi",
      "websiteUrl": "https://bashta1510.github.io/prj/",
      "codeSourceUrl": "https://github.com/bashta1510/prj",
      "cvUrl": "www.linkedin.com/in/andrii-bashynskyi-201107159",
      "photoUrl": "assets/images/students/bashynskyi.png"
    },
    {
      "name": "Andrii Nakota",
      "websiteUrl": "https://andnkt.github.io/my-site70-perc/",
      "codeSourceUrl": "https://andnkt.github.io/my-site70-perc/",
      "cvUrl": "",
      "photoUrl": "assets/images/no-photo.gif"
    },
    {
      "name": "Ihor Dubovskyi",
      "websiteUrl": "https://dubovskyi.github.io/project-revivew/",
      "codeSourceUrl": "https://github.com/dubovskyi/project-revivew",
      "cvUrl": "https://www.linkedin.com/in/ігор-дубовський-645a0913a/",
      "photoUrl": "assets/images/students/dubovskyi.jpg"
    },
    {
      "name": "Iryna Detsyk",
      "websiteUrl": "",
      "codeSourceUrl": "",
      "cvUrl": "",
      "photoUrl": "assets/images/students/detsyk.jpg"
    },
    {
      "name": "Ivan Rekhman",
      "websiteUrl": "https://ivanrekh.github.io/personal_site_3/",
      "codeSourceUrl": "https://github.com/ivanrekh/personal_site_3/",
      "cvUrl": "",
      "photoUrl": ""
    },
    {
      "name": "Lidiia Marchenko",
      "websiteUrl": "https://lidjshka.github.io/Wittchen/",
      "codeSourceUrl": "https://github.com/lidjshka/Wittchen",
      "cvUrl": "https://www.linkedin.com/in/marchenko-lidiia-43108669/",
      "photoUrl": "assets/images/students/marchenko.jpg"
    },
    {
      "name": "Uliana Boiarchuk",
      "websiteUrl": "https://mywebsite-ulyanka1.c9users.io/index.html",
      "codeSourceUrl": "https://github.com/ulyanka12/mywebsite",
      "cvUrl": "https://www.linkedin.com/in/ulyana-boyarchuk-162879104/",
      "photoUrl": "assets/images/students/boiarchuk.jpg"
    },
    {
      "name": "Yurii Tymkiv",
      "websiteUrl": "https://reslerua.github.io/Apple-projeckt/",
      "codeSourceUrl": "https://github.com/reslerua/Apple-projeckt",
      "cvUrl": "https://www.linkedin.com/in/yurii-tymkiv-b92107159/",
      "photoUrl": "assets/images/students/tymkiv.jpg"
    },
    {
      "name": "Yaryna Sorochuk",
      "websiteUrl": "https://yarkaya.github.io/responsive/",
      "codeSourceUrl": "https://github.com/yarkaya/responsive",
      "cvUrl": "https://www.linkedin.com/in/yaryna-sorochuk-a0928b134/",
      "photoUrl": "assets/images/students/sorochuk.jpg"
    },
    {
      "name": "Roman Romaniv",
      "websiteUrl": "https://rromanitc.github.io/my_site/",
      "codeSourceUrl": "https://github.com/rromanitc/my_site",
      "cvUrl": "https://www.linkedin.com/in/roman-romaniv-45785475/",
      "photoUrl": "assets/images/students/romaniv.jpg"
    }
  ];

  constructor() { }

  get students() {
    return this
            .studentList
            .filter( s => s.websiteUrl )
            .sort( (a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) ) 
            .map( student => { 
              if (!student.photoUrl) {
                  student.photoUrl = 'assets/images/no-photo.gif';
              }
              return student;
            });
  }

}
