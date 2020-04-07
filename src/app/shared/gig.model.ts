interface GigInterface{
    showcaseBackground : string, 
    showcaseDescription: string, 
    showcaseTitle: string,
    images: Array<string>,
    about: string,
    tags: Array<string>,
    basicPrice: number,
    basicTitle: string,
    basicDescription: string,
    basicRevisions: number,
    basicDelivery: number,
    standardPrice: number,
    standardTitle: string,
    standardDescription: string,
    standardRevisions: string,
    standardDelivery: string,
    premiumPrice: number,
    premiumTitle: string,
    premiumDescription: string,
    premiumRevisions: string,
    premiumDelivery: string,
}
export class GigModel{
   constructor(public gig: GigInterface){  }
}
