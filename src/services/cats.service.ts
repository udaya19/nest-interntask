import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getAllCats(): string {
    return 'All cats';
  }
}
