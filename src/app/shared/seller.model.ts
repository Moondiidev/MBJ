export class SellerModel{
    constructor(
        public profileImage : string,
        public firstname: string,
        public lastname: string,
        public personalDescription: string,
        public profession: Array<string>,
        public professionFromYear: string,
        public professionToYear: string,
        ){}
}
