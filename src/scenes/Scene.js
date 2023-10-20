
export default class Scene {

    objects = [];

    constructor() {

    }

    addObject(object) {
        this.objects.push(object);
    }

    removeObject(object) {

        this.objects.forEach((o, index) => {
            if ( object == o ) {

				this.objects.splice( index, 1 );
				return;

			}
        })
    }

    add(object) {
        this.addObject( object );
    }

    toString() {
        return 'MTHREE.Scene ( ' + this.objects + ' )';
    }
}