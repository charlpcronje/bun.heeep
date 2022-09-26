namespace heepp {
    class Output {
        private static instance: Output;

        constructor() {
            if (Output.instance) {
                throw new Error("Error - use Output.getInstance()");
            }
            Output.instance = this;
        }

        static getInstance(): Output {
            Output.instance = Output.instance || new Output();
            return Output.instance;
        }
    }
}