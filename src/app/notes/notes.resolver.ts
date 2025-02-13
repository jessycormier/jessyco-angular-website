import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { NoteData } from './interfaces/note-data.interface';
import { NotesService } from './notes.service';
import { NoteRouteType } from './note-route-type.enum';

export const notesResolver: ResolveFn<any | NoteData | null> = (route) => {
  const notesService = inject(NotesService);
  const id = route.paramMap.get('id');
  const category = route.paramMap.get('category');
  const noteRouteType = route.data['type'] as NoteRouteType;

  if(noteRouteType == NoteRouteType.homePage) {
    return {

    };
  }



  // const param = route.paramMap.get('id') || route.paramMap.get('category');
  // const type = route.data['type'];

  // if (type === 'id' && param) {
  //   return notesService.getNoteById(param);
  // } else if (type === 'category' && param) {
  //   return notesService.getNotesByCategory(param);
  // } else if (type === 'category-note' && param) {
  //   return notesService.getNoteInCategory(param);
  // }

  // if (!id) {
  //   return notesService.goToError404();
  // }

  return notesService.i('content');


  // return notesService.getNoteByName(`content/${id}.md`);

//   return {
//     markdown: `
//     # id: ${id}
//     # category: ${category}
//     # type: ${route.data['type']}
// `,
//   };
};
