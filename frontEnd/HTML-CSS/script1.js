function drop(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(event.dataTransfer.files);
}

function dragover(event){
    event.stopPropagation();
    event.preventDefault();
}

function dragenter(event){
    event.stopPropagation();
    event.preventDefault();
}