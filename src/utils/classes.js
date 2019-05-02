export class Article {
  constructor ({id, title, subtitle, category, subcategory, text, img, imgThumbnail, author}){
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.category = category;
    this.subcategory= subcategory;
    this.text = text;
    this.img = img;
    this.imgThumbnail = imgThumbnail;
    this.author = author
  }
};