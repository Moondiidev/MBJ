export class ProfessionalModel{
    constructor(
        public profession: string,
        public professionSkills: Array<string>,
        public fromYear: number,
        public toYear: number,
        ){}
}
