import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'movieFilter',
    pure: false
})
export class MovieFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    console.log("in filter");
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    //return items.filter((item: any) => item.movie_title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    
    return items.filter( it => {
        return it.movie_title.toLowerCase().includes(filter.toLowerCase());
      });
  }
  
}