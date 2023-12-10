import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Landing',
      url: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'White Supra',
      url: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Bogota',
      url: 'https://images.unsplash.com/photo-1583248875887-720fbc43e923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZ290YXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  checkWindowIndex(index: number) {
    if (this.currentPage >= 3) {
      return Math.abs(this.currentPage - index) < 3;
    }
    
    return index < 5;
  }
}
