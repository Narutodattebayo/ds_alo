// let print = (array, arrayIndex, buffer, bufferIndex, maxBufferLength) => {
//     //base case if buffer is full or arrayIndex exceeds arraylength
//     if (bufferIndex == maxBufferLength) {
//         console.log("result...................", buffer, bufferIndex);
//         return
//     }
//     if (arrayIndex == array.length) {
//         return;
//     }
//     // console.log(arrayIndex,"????????????????????????????")
//     for (let i = arrayIndex; i < array.length; i++) {
//         // console.log(arrayIndex, bufferIndex, buffer)
//         // console.log("oing to add now at bufferindex",bufferIndex,"arrayindex",i)
//         console.log("buffer at start", buffer)
//         buffer[bufferIndex] = array[i];
//         console.log("buffer before rec", buffer)
//         // console.log(buffer,"befor finaly printing result",buffer)
//         console.log("going to call recursion with next arrayindex", arrayIndex + 1, "bufferindex", bufferIndex + 1)
//         print(array, arrayIndex + 1, buffer, bufferIndex + 1, maxBufferLength);

//     }

// }
// print([0, 1], 0, [], 0, 2)



let print = (array, arrayIndex, buffer, bufferIndex, maxBufferLength) => {
    //base case if buffer is full or arrayIndex exceeds arraylength
    if (bufferIndex == maxBufferLength) {
        console.log("result...................", buffer);
        return
    }
    if (arrayIndex == array.length) {
        return;
    }
    for (let i = arrayIndex; i < array.length; i++) {
        buffer[bufferIndex] = array[i];
        print(array, arrayIndex + 1, buffer, bufferIndex + 1, maxBufferLength);

    }

}
print([0, 1], 0, [], 0, 2)