export class Task {
    constructor(
        public id: string,
        public name: string,
        public edited: boolean,
        public priority?: string,
        public deadline?: string,
        public details?: string
    ) { }
}
