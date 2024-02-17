interface Post {
    title: string;
    daysOld: number;
    published: boolean;
}

const myName: string = 'Alex';

// objects
const post :{ title: string, daysOld: number, published: boolean } = {
    title: 'The title',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld})`;
}

printPost(post);