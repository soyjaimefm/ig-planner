export function handleInputChange(e, fileSetter) {
    e.preventDefault();
    const files = e.target.files;

    console.log('archivos selected')
    console.log(files);

    readFile(files[0], fileSetter);
}

export function handleInputChangeDrop(e, fileSetter) {
    e.preventDefault();
    const files = e.dataTransfer.files;

    // const filteredFiles = files.filter((file) => {
    //     return file.type.includes('image');
    // });

    // console.log('filtered files');
    // console.log(filteredFiles);

    console.log('data transfer');
    console.log(e.dataTransfer.items)

    console.log('archivos dropped:')
    console.log(files);

    readFile(files[0], fileSetter);
}

const readFile = (file, fileSetter) => {

    console.log(file)

    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', (e) => {
            fileSetter(e.target.result);
        });
        reader.readAsDataURL(file);
    }
}