class Boat {
    @testDecorator
    color: string = 'red';

    get formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError('Oops, boat was sunk')
    pilot(): void {
        throw new Error();
        console.log('swish');
    }
}

function testDecorator(target: any, key: string) {
    console.log(target);
    console.log(key);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function () {
            try {
                method();
            } catch (error) {
                console.log(errorMessage)
            }
        }
    }
}