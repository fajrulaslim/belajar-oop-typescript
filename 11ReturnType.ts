class Burung11 {
    private kaki: number = 2

    getKaki(): number {
        return this.kaki
    }

    terbang(): void {
        console.log('Terbang')
    }

    async makan(): Promise<string> {
        return  'string'
    }
}