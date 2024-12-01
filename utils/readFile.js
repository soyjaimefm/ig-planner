export function handleInputChange(e, fileSetter) {
    e.preventDefault();
    const [file] = e.target.files;
    if (file) {
        readFile(file, fileSetter);
    }
}

export function handleInputChangeDrop(e, fileSetter) {
    e.preventDefault();
    const files = e.dataTransfer.files;    

    // const filteredFiles = files.filter((file) => {
    //     return file.type.includes('image');
    // });


    readFile(files[0], fileSetter);
}

const readFile = (file, fileSetter) => {
    // let url = URL.createObjectURL(file); // esta opción funciona más rapido para una única imagen pero gasta mucha memoría si hubiera muchas  https://stackoverflow.com/questions/31742072/filereader-vs-window-url-createobjecturl
    // fileSetter(url);

    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', (e) => {
            fileSetter(e.target.result);
        });
        reader.readAsDataURL(file);
    }
}