
//goes through all possible legal moves to determine if its checkmate

function checkIfCheckmate() {

    //alert("player is " + player);
    //for 64 squares
    let square1 = document.querySelectorAll("#square11");
    let square2 = document.querySelectorAll("#square12");
    let square3 = document.querySelectorAll("#square13");
    let square4 = document.querySelectorAll("#square14");
    let square5 = document.querySelectorAll("#square15");
    let square6 = document.querySelectorAll("#square16");
    let square7 = document.querySelectorAll("#square17");
    let square8 = document.querySelectorAll("#square18");
    let square9 = document.querySelectorAll("#square21");
    let square10 = document.querySelectorAll("#square22");
    let square11 = document.querySelectorAll("#square23");
    let square12 = document.querySelectorAll("#square24");
    let square13 = document.querySelectorAll("#square25");
    let square14 = document.querySelectorAll("#square26");
    let square15 = document.querySelectorAll("#square27");
    let square16 = document.querySelectorAll("#square28");
    let square17 = document.querySelectorAll("#square31");
    let square18 = document.querySelectorAll("#square32");
    let square19 = document.querySelectorAll("#square33");
    let square20 = document.querySelectorAll("#square34");
    let square21 = document.querySelectorAll("#square35");
    let square22 = document.querySelectorAll("#square36");
    let square23 = document.querySelectorAll("#square37");
    let square24 = document.querySelectorAll("#square38");
    let square25 = document.querySelectorAll("#square41");
    let square26 = document.querySelectorAll("#square42");
    let square27 = document.querySelectorAll("#square43");
    let square28 = document.querySelectorAll("#square44");
    let square29 = document.querySelectorAll("#square45");
    let square30 = document.querySelectorAll("#square46");
    let square31 = document.querySelectorAll("#square47");
    let square32 = document.querySelectorAll("#square48");
    let square33 = document.querySelectorAll("#square51");
    let square34 = document.querySelectorAll("#square52");
    let square35 = document.querySelectorAll("#square53");
    let square36 = document.querySelectorAll("#square54");
    let square37 = document.querySelectorAll("#square55");
    let square38 = document.querySelectorAll("#square56");
    let square39 = document.querySelectorAll("#square57");
    let square40 = document.querySelectorAll("#square58");
    let square41 = document.querySelectorAll("#square61");
    let square42 = document.querySelectorAll("#square62");
    let square43 = document.querySelectorAll("#square63");
    let square44 = document.querySelectorAll("#square64");
    let square45 = document.querySelectorAll("#square65");
    let square46 = document.querySelectorAll("#square66");
    let square47 = document.querySelectorAll("#square67");
    let square48 = document.querySelectorAll("#square68");
    let square49 = document.querySelectorAll("#square71");
    let square50 = document.querySelectorAll("#square72");
    let square51 = document.querySelectorAll("#square73");
    let square52 = document.querySelectorAll("#square74");
    let square53 = document.querySelectorAll("#square75");
    let square54 = document.querySelectorAll("#square76");
    let square55 = document.querySelectorAll("#square77");
    let square56 = document.querySelectorAll("#square78");
    let square57 = document.querySelectorAll("#square81");
    let square58 = document.querySelectorAll("#square82");
    let square59 = document.querySelectorAll("#square83");
    let square60 = document.querySelectorAll("#square84");
    let square61 = document.querySelectorAll("#square85");
    let square62 = document.querySelectorAll("#square86");
    let square63 = document.querySelectorAll("#square87");
    let square64 = document.querySelectorAll("#square88");
    let squares = [];
    squares[0] = 0;
    squares[1] = square1;
    squares[2] = square2;
    squares[3] = square3;
    squares[4] = square4;
    squares[5] = square5;
    squares[6] = square6;
    squares[7] = square7;
    squares[8] = square8;
    squares[9] = square9;
    squares[10] = square10;
    squares[11] = square11;
    squares[12] = square12;
    squares[13] = square13;
    squares[14] = square14;
    squares[15] = square15;
    squares[16] = square16;
    squares[17] = square17;
    squares[18] = square18;
    squares[19] = square19;
    squares[20] = square20;
    squares[21] = square21;
    squares[22] = square22;
    squares[23] = square23;
    squares[24] = square24;
    squares[25] = square25;
    squares[26] = square26;
    squares[27] = square27;
    squares[28] = square28;
    squares[29] = square29;
    squares[30] = square30;
    squares[31] = square31;
    squares[32] = square32;
    squares[33] = square33;
    squares[34] = square34;
    squares[35] = square35;
    squares[36] = square36;
    squares[37] = square37;
    squares[38] = square38;
    squares[39] = square39;
    squares[40] = square40;
    squares[41] = square41;
    squares[42] = square42;
    squares[43] = square43;
    squares[44] = square44;
    squares[45] = square45;
    squares[46] = square46;
    squares[47] = square47;
    squares[48] = square48;
    squares[49] = square49;
    squares[50] = square50;
    squares[51] = square51;
    squares[52] = square52;
    squares[53] = square53;
    squares[54] = square54;
    squares[55] = square55;
    squares[56] = square56;
    squares[57] = square57;
    squares[58] = square58;
    squares[59] = square59;
    squares[60] = square60;
    squares[61] = square61;
    squares[62] = square62;
    squares[63] = square63;
    squares[64] = square64;

    let board = [];

    board[1] = boardSquare1;
    board[2] = boardSquare2;
    board[3] = boardSquare3;
    board[4] = boardSquare4;
    board[5] = boardSquare5;
    board[6] = boardSquare6;
    board[7] = boardSquare7;
    board[8] = boardSquare8;
    board[9] = boardSquare9;
    board[10] = boardSquare10;
    board[11] = boardSquare11;
    board[12] = boardSquare12;
    board[13] = boardSquare13;
    board[14] = boardSquare14;
    board[15] = boardSquare15;
    board[16] = boardSquare16;
    board[17] = boardSquare17;
    board[18] = boardSquare18;
    board[19] = boardSquare19;
    board[20] = boardSquare20;
    board[21] = boardSquare21;
    board[22] = boardSquare22;
    board[23] = boardSquare23;
    board[24] = boardSquare24;
    board[25] = boardSquare25;
    board[26] = boardSquare26;
    board[27] = boardSquare27;
    board[28] = boardSquare28;
    board[29] = boardSquare29;
    board[30] = boardSquare30;
    board[31] = boardSquare31;
    board[32] = boardSquare32;
    board[33] = boardSquare33;
    board[34] = boardSquare34;
    board[35] = boardSquare35;
    board[36] = boardSquare36;
    board[37] = boardSquare37;
    board[38] = boardSquare38;
    board[39] = boardSquare39;
    board[40] = boardSquare40;
    board[41] = boardSquare41;
    board[42] = boardSquare42;
    board[43] = boardSquare43;
    board[44] = boardSquare44;
    board[45] = boardSquare45;
    board[46] = boardSquare46;
    board[47] = boardSquare47;
    board[48] = boardSquare48;
    board[49] = boardSquare49;
    board[50] = boardSquare50;
    board[51] = boardSquare51;
    board[52] = boardSquare52;
    board[53] = boardSquare53;
    board[54] = boardSquare54;
    board[55] = boardSquare55;
    board[56] = boardSquare56;
    board[57] = boardSquare57;
    board[58] = boardSquare58;
    board[59] = boardSquare59;
    board[60] = boardSquare60;
    board[61] = boardSquare61;
    board[62] = boardSquare62;
    board[63] = boardSquare63;
    board[64] = boardSquare64;

    

    let count1 = 0;
    let count2 = 0;
    let counter = 0;
    let variableName = null;

    //loop through all  moves for each white piece 
    if (player === "white") {
        for (let i = 1; i < 65; i++) {
            console.log(i);
            if ((squares[i][0].classList.contains("white")) && (squares[i][0].classList.length == 6)) 
            {
                console.log(i);
                console.log(squares[i][0].classList);
                count1++;
                piece1Array = squares[i][0].classList;
                piece1Rank = Math.trunc(Number(piece1Array[1]));
                piece1File = Math.trunc(Number(piece1Array[2]));
                piece1Name = piece1Array[4];    
                
                



                for (let j = 1; j < 65; j++) {
                    //find  destination squares
                    if ((squares[j][0].classList.length == 4) || (squares[j][0].classList.length == 6)) {
                        count2++;
                        piece2Array = squares[j][0].classList;
                        piece2Coordinates = piece2Array[0];
                        piece2Rank = Math.trunc(Number(piece2Array[1]));
                        piece2File = Math.trunc(Number(piece2Array[2]));
                        piece2length = piece2Array.length;
                        piece2Color = piece2Array[5];



                        //console.log(board[i]);

                        //board[i].pop(); 

                        //pawns
                        //white pawn on 2nd rank moving up 1 or 2 squares
                        if (piece1Name === "whitePawn") {
                            //if square to check is empty
                            if (piece2length == 4) {
                                if (piece1Rank == 2) {
                                    if (((piece2Rank - piece1Rank) <= 2) && ((piece2Rank - piece1Rank) > 0)) {
                                        if ((piece1File - piece2File) == 0) {
                                            //squareToCheckDoc[0].classList.add("white"); 
                                           // squareToCheckArray = squareToCheckDoc[0].classList;
                                            //squareToCheckArray.push("white"); 

                                //remove pieceName and color from the original square by pop 2x
                               
                               board[i].pop();
                               board[i].pop();

                                            
                                    //   add white to the destination square and then call isCheckmate()
                                            board[j].push("white");                                                                                                                                        
                                            if (!isCheckmate()) {
                                    //add pieceName and color back to the original square
                                                board[i].push("whitePawn");
                                                board[i].push("white");
                                     //   remove white from the destination square         
                                                board[j].pop("white");  
                                                alert("returned false from checkIfCheckmate() white pawn on 2nd rank");
                                                return false;
                                            }
                                            else{
                                                board[i].push("whitePawn");
                                                board[i].push("white");
                                                board[j].pop("white");                                                                                                                                                        
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        //white pawn move fwd NOT on 2nd rank
                        if (piece1Name === "whitePawn") {
                            if (piece2length == 4) {
                                if (piece2Rank > 2) {
                                    if (((piece2Rank - piece1Rank) == 1)) {
                                        if ((piece1File - piece2File) == 0) {
                                            //squareToCheckDoc[0].classList.add("white");                                           

                                            if (!isCheckmate()) {
                                                //squareToCheckDoc[0].classList.remove("white");

                                                alert("returned false from checkIfCheckmate() white pawn not on 2nd rank");

                                                return false;
                                            } else {
                                                // squareToCheckDoc[0].classList.remove("white");

                                            }
                                        }
                                    }
                                }
                            }
                        }
                        //white pawn CAPTURE A PIECE
                        if (piece1Name === "whitePawn") {
                            if (((piece2length >= 6)) && ((piece2Color === "black"))) {
                                if (((piece2Rank - piece1Rank) == 1)) {
                                    if (((piece2File - piece1File) == 1) || ((piece1File - piece2File) == 1)) {
                                        // squareToCheckDoc[0].classList.add("white");                                           

                                        if (!isCheckmate()) {
                                            //squareToCheckDoc[0].classList.remove("white");

                                            alert("returned false from checkIfCheckmate() white pawn capture a piece");
                                            return false;
                                        }
                                        else {
                                            //squareToCheckDoc[0].classList.remove("white");

                                        }
                                    }
                                }
                            }
                        }

                        //knights
                        //white knight
                        if (piece1Name === "whiteKnight") {
                            if ((piece2Rank - piece1Rank == 2) || (piece2Rank - piece1Rank == -2)) {
                                if ((piece1File - piece2File == 1) || (piece1File - piece2File == -1)) {
                                    //if destination is enemy piece,  or if destination is empty square
                                    if ((piece2Color === "black") || (piece2Array.length == 4)) {
                                        //squareToCheckDoc[0].classList.add("white");                                           

                                        if (!isCheckmate()) {
                                            //squareToCheckDoc[0].classList.remove("white");

                                            alert("returned false from checkIfCheckmate() white knight1");
                                            return false;
                                        }
                                        else {
                                            //squareToCheckDoc[0].classList.remove("white");

                                        }
                                    }
                                }
                            }
                            if ((piece2Rank - piece1Rank == 1) || (piece2Rank - piece1Rank == -1)) {
                                if ((piece1File - piece2File == 2) || (piece1File - piece2File == -2)) {
                                    if ((piece2Color === "black") || (piece2Array.length == 4)) {
                                        //squareToCheckDoc[0].classList.add("white");                                           

                                        if (!isCheckmate()) {
                                            //squareToCheckDoc[0].classList.remove("white");

                                            alert("returned false from checkIfCheckmate() white knight2");
                                            return false;
                                        }
                                        else {
                                            // squareToCheckDoc[0].classList.remove("white");

                                        }
                                    }
                                }
                            }
                        }

                        //DIAGONALS - bishops and queens and kings?

                        //white bishop
                        if (piece1Name === "whiteBishop") {
                            // //going UP/LEFT
                            let maxNumberOfSquaresToCheckUpLeft = Number(piece1File) - Number(piece2File) - 1;
                            if (piece1File - piece2File > 0) {
                                if (piece2Rank - piece1Rank > 0) {
                                    if ((piece2Rank - piece1Rank) == (Number(piece1File) - Number(piece2File))) {
                                        let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                        let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                        counter = 0;
                                        let squaresCountedUpLeft = 0;
                                        for (let i = 0; i <= maxNumberOfSquaresToCheckUpLeft; i++) {
                                            counter++;
                                            squaresCountedUpLeft++;
                                            let squareToCheckRank = Number(piece1Rank) + squaresCountedUpLeft;
                                            let squareToCheckFile = Number(piece1File) - squaresCountedUpLeft;
                                            let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                            let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                            if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpLeft != 0)) {
                                                //squareToCheckDoc[0].classList.add("white");
                                                if (!isCheckmate()) {
                                                    //squareToCheckDoc[0].classList.remove("white");

                                                    alert("returned false from checkIfCheckmate() white bishops 278");

                                                    return false;
                                                }
                                                else {
                                                    //squareToCheckDoc[0].classList.remove("white");

                                                }

                                                break;
                                            }
                                            //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                            if ((maxNumberOfSquaresToCheckUpLeft == 0) || (squaresCountedUpLeft == maxNumberOfSquaresToCheckUpLeft)) {
                                                if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                    if (piece2Color === "white") {
                                                        break;

                                                    } else {
                                                        // squareToCheckDoc[0].classList.add("white");
                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                            alert("returned false from checkIfCheckmate() white bishops 547");
                                                            return false;
                                                        }
                                                        else {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                        if (destinationSquareDoc[0].classList.length == emptySquare) {
                                            if (!isCheckmate()) { 
                                                alert("returned false from checkIfCheckmate() white bishops 557");

                                                return false; }
                                        } 
                                    }
                                }
                            }
                            //going UP/RIGHT
                            let maxNumberOfSquaresToCheckUpRight = Number(piece2File) - Number(piece1File) - 1;
                            if (piece2File - piece1File > 0) {
                                if (piece2Rank - piece1Rank > 0) {
                                    if ((piece2Rank - piece1Rank) == (Number(piece2File) - Number(piece1File))) {
                                        let destinationSquareFile = Number(piece2File);
                                        let destinationSquare = "#square" + piece2Rank + Math.trunc(destinationSquareFile);
                                        let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                        let firstSquareFile = Number(piece1File) + 1;
                                        counter = 0;
                                        let squaresCountedUpRight = 0;
                                        for (let i = 0; i <= maxNumberOfSquaresToCheckUpRight; i++) {
                                            counter++;
                                            squaresCountedUpRight++;
                                            let squareToCheckRank = Number(piece1Rank) + squaresCountedUpRight;
                                            let squareToCheckFile = Number(piece1File) + squaresCountedUpRight;
                                            let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                            let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                            if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpRight != 0)) {
                                                //squareToCheckDoc[0].classList.add("white");
                                                if (!isCheckmate()) {
                                                    //squareToCheckDoc[0].classList.remove("white");

                                                    alert("returned false from checkIfCheckmate() white bishops 547");
                                                    return false;
                                                }
                                                else {
                                                    //squareToCheckDoc[0].classList.remove("white");

                                                }
                                                break;
                                            }
                                            //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                            if ((maxNumberOfSquaresToCheckUpRight == 0) || (squaresCountedUpRight == maxNumberOfSquaresToCheckUpRight)) {
                                                if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                    if (piece2Color === "white") {
                                                        break;
                                                    } else {
                                                        //squareToCheckDoc[0].classList.add("white");              
                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                            alert("returned false from checkIfCheckmate() white bishops 593");

                                                            return false;
                                                        }
                                                        else {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                        if (destinationSquareDoc[0].classList.length == emptySquare) {
                                            if (!isCheckmate()) { 
                                                alert("returned false from checkIfCheckmate() white bishops 604");

                                                return false; }
                                        } 
                                    }
                                }
                            }
                            //going DOWN/LEFT
                            let maxNumberOfSquaresToCheckDownLeft = Number(piece1File) - Number(piece2File) - 1;
                            if (piece1File - piece2File > 0) {
                                if (piece1Rank - piece2Rank > 0) {
                                    if ((piece1Rank - piece2Rank) == (Number(piece1File) - Number(piece2File))) {
                                        let destinationSquareRank = Number(piece2Rank);
                                        let destinationSquareFileTemp = Number(piece2File);
                                        let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                                        let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                        let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                        let firstSquareRank = Number(piece1Rank) - 1;
                                        let firstSquareFile = Number(piece1File) - 1;
                                        let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                        let firstSquareDoc = document.querySelectorAll(firstSquare);
                                        counter = 0;
                                        let squaresCountedDownLeft = 0;
                                        for (let i = 0; i <= maxNumberOfSquaresToCheckDownLeft; i++) {
                                            counter++;
                                            squaresCountedDownLeft++;
                                            let squareToCheckRank = Number(piece1Rank) - squaresCountedDownLeft;
                                            let squareToCheckFile = Number(piece1File) - squaresCountedDownLeft;
                                            let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                            let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                            if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownLeft != 0)) {
                                                //squareToCheckDoc[0].classList.add("white");
                                                if (!isCheckmate()) {
                                                    //squareToCheckDoc[0].classList.remove("white");

                                                    alert("returned false from checkIfCheckmate() white bishops 547");
                                                    return false;
                                                }
                                                else {
                                                    //squareToCheckDoc[0].classList.remove("white");

                                                }
                                                break;
                                            }
                                            //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                            if ((maxNumberOfSquaresToCheckDownLeft == 0) || (squaresCountedDownLeft == maxNumberOfSquaresToCheckDownLeft)) {
                                                if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                    if (piece2Color === "white") {
                                                        break;
                                                    } else {
                                                        //squareToCheckDoc[0].classList.add("white");


                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                            alert("returned false from checkIfCheckmate() white bishops 644");

                                                            return false;
                                                        }
                                                        else {
                                                            // squareToCheckDoc[0].classList.remove("white");

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                        if (destinationSquareDoc[0].classList.length == emptySquare) {

                                            if (!isCheckmate()) { 
                                                alert("returned false from checkIfCheckmate() white bishops 655");

                                                return false; }
                                        } 
                                    }
                                }
                            }
                            //going DOWN/RIGHT
                            let maxNumberOfSquaresToCheckDownRight = Number(piece2File) - Number(piece1File) - 1;
                            if (piece2File - piece1File > 0) {
                                if (piece1Rank - piece2Rank > 0) {
                                    if ((piece1Rank - piece2Rank) == (Number(piece2File) - Number(piece1File))) {
                                        let destinationSquareFile = Number(piece2File);
                                        let destinationSquare = "#square" + piece2Rank + Math.trunc(destinationSquareFile);
                                        let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                        let firstSquareRank = Number(piece1Rank) + 1;
                                        let firstSquareFile = Number(piece1File) + 1;
                                        let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                        let firstSquareDoc = document.querySelectorAll(firstSquare);
                                        counter = 0;
                                        let squaresCountedDownRight = 0;
                                        for (let i = 0; i <= maxNumberOfSquaresToCheckDownRight; i++) {
                                            counter++;
                                            squaresCountedDownRight++;
                                            let squareToCheckRank = Number(piece1Rank) - squaresCountedDownRight;
                                            let squareToCheckFile = Number(piece1File) + squaresCountedDownRight;
                                            let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                            let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                            if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownRight != 0)) {
                                                // squareToCheckDoc[0].classList.add("white");
                                                if (!isCheckmate()) {
                                                    //squareToCheckDoc[0].classList.remove("white");

                                                    alert("returned false from checkIfCheckmate() white bishops 547");
                                                    return false;
                                                }
                                                //squareToCheckDoc[0].classList.remove("white");

                                                break;
                                            }
                                            //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                            if ((maxNumberOfSquaresToCheckDownRight == 0) || (squaresCountedDownRight == maxNumberOfSquaresToCheckDownRight)) {
                                                if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                    if (piece2Color === "white") {
                                                        break;
                                                    } else {
                                                        //squareToCheckDoc[0].classList.add("white");
                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                            alert("returned false from checkIfCheckmate() white bishops 547");
                                                            return false;
                                                        }
                                                        else {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                        }

                                                    }
                                                }
                                            }
                                        }
                                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                        if (destinationSquareDoc[0].classList.length == emptySquare) {
                                            if (!isCheckmate()) { 
                                                alert("returned false from checkIfCheckmate() white bishops 706");
                                                return false; }
                                        } 
                                    }
                                }
                            }
                        }

                        //QUEENS //ROOKS //KINGS
                        if ((piece1Name === "whiteQueen") || (piece1Name === "whiteQueenRook") || (piece1Name === "whiteKingRook") || (piece1Name === "whiteKing")) {
                            //going UP
                            let maxNumberOfSquaresToCheckUp = (Number(piece2Rank) - Number(piece1Rank)) - 1;
                            if (piece1File - piece2File == 0) {
                                if (piece2Rank - piece1Rank > 0) {
                                    let destinationSquareRank = Number(piece2Rank);
                                    let destinationSquareFileTemp = Number(piece2File);
                                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                                    let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                    let firstSquareRank = Number(piece1Rank) + 1;
                                    let firstSquareFile = Number(piece1File);
                                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                                    counter = 0;
                                    let squaresCountedUp = 0;
                                    //alert("max number up to check " + maxNumberOfSquaresToCheckUp);
                                    for (let i = 0; i <= maxNumberOfSquaresToCheckUp; i++) {
                                        counter++;
                                        squaresCountedUp++;
                                        //code added for Kings
                                        if ((piece1Name === "whiteKing")) {
                                            maxNumberOfSquaresToCheckUp = 0;
                                        }
                                        let squareToCheckRank = Number(piece1Rank) + squaresCountedUp;
                                        let squareToCheckFile = Number(piece1File);
                                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUp != 0)) {
                                            //   add white to this square!!!!!  how?    and then call isCheckmate()
                                            squareToCheckDoc[0].classList.add("white");                                           
                                            if (!isCheckmate()) {
                                                //squareToCheckDoc[0].classList.remove("white");

                                                alert("returned false from checkIfCheckmate() 570");
                                                return false;
                                            }
                                            else {
                                                //squareToCheckDoc[0].classList.remove("white");

                                            }
                                            break;

                                        }


                                        

                                        //added code for Kings
                                        if (piece1Name === "whiteKing") {
                                            if ((piece2Rank - piece1Rank) > 1) {
                                                break;
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {
                                                if (!isCheckmate()) {
                                                    return false;
                                                }
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                break;
                                            }
                                            if (squareToCheckDoc[0].classList.length == emptySquare) {
                                                if (!isCheckmate()) {
                                                    return false;
                                                }
                                            }
                                        }

                                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                        if ((maxNumberOfSquaresToCheckUp == 0) || (squaresCountedUp == maxNumberOfSquaresToCheckUp)) {
                                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                if (((player === "white") && (piece2Color === "white"))) {
                                                    break;
                                                } else {
                                                    if (player === "white") {
                                                        //squareToCheckDoc[0].classList.add("white");                                           

                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                            alert("returned false from checkIfCheckmate()  kings rooks queens");
                                                            return false;
                                                        }
                                                        else {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }
                                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )

                                    if (destinationSquareDoc[0].classList.length == emptySquare) {

                                        //alert("did we get here   1")
                                        if (player === "white") {

                                            if (!isCheckmate()) { 
                                                alert("returned false from checkIfCheckmate() kings rooks queens 805");

                                                return false; }
                                        } 

                                    }

                                }
                            }
                            //going DOWN
                            let maxNumberOfSquaresToCheckDown = Number(piece1Rank) - Number(piece2Rank) - 1;
                            if (piece1Name === "whiteKingRook") {
                                alert("maxnumberofsquarestocheck down " + maxNumberOfSquaresToCheckDown);
                            }
                            if (piece1File - piece2File == 0) {
                                if (piece1Rank - piece2Rank > 0) {
                                    let destinationSquareRank = Number(piece2Rank);
                                    let destinationSquareFileTemp = Number(piece2File);
                                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                                    let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                    let firstSquareRank = Number(piece1Rank) - 1;
                                    let firstSquareFile = Number(piece1File);
                                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                                    counter = 0;
                                    let squaresCountedDown = 0;
                                    for (let i = 0; i <= maxNumberOfSquaresToCheckDown; i++) {
                                        counter++;
                                        squaresCountedDown++;
                                        //code added for Kings
                                        if (piece1Name === ("whiteKing")) {
                                            maxNumberOfSquaresToCheckDown = 0;
                                        }
                                        let squareToCheckRank = Number(piece1Rank) - squaresCountedDown;  // squareToCheckRank is 2
                                        let squareToCheckFile = Number(piece1File); // squareToCheckFile is 7
                                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);  //27
                                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);


                                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDown != 0)) {

                                            //   add white to this square!!!!!  how?    and then call isCheckmate()
                                            squareToCheckDoc[0].classList.add("white");                                           
                                            if (!isCheckmate()) {
                                                //squareToCheckDoc[0].classList.remove("white");

                                                alert("returned false from checkIfCheckmate() 570");
                                                return false;
                                            }
                                            else {
                                                //squareToCheckDoc[0].classList.remove("white");

                                            }
                                            break;
                                        }
                                        //added code for Kings
                                        if (piece1Name === "whiteKing") {
                                            if ((piece1Rank - piece2Rank) > 1) {
                                                break;
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {
                                                alert(" white rook also got here and is calling isCheckmate()");

                                                if (!isCheckmate()) {
                                                    alert("returned false from checkIfCheckmate() 904");

                                                    return false;
                                                }
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                break;
                                            }
                                            if (squareToCheckDoc[0].classList.length == emptySquare) {

                                                if (!isCheckmate()) {

                                                    alert("returned false from checkIfCheckmate() 915");

                                                    return false;
                                                }
                                            }
                                        }

                                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                        if ((maxNumberOfSquaresToCheckDown == 0) || (squaresCountedDown == maxNumberOfSquaresToCheckDown)) {

                                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                if (((player === "white") && (piece2Color === "white"))) {
                                                    break;
                                                } else {
                                                    if (player === "white") {

                                                        //squareToCheckDoc[0].classList.add("white");                                           

                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");


                                                            alert("returned false from checkIfCheckmate() 954");

                                                            return false;
                                                        }
                                                        else {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }
                                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                                        if (player === "white") {

                                            if (!isCheckmate()) { r
                                                alert("returned false from checkIfCheckmate() 975");

                                                return false; }
                                        } else {
                                            if (player === "white") {

                                                if (!isCheckmate()) { 


                                                    alert("returned false from checkIfCheckmate() 984");

                                                    return false; }
                                            }
                                        }

                                    }
                                }
                            }

                            //going LEFT

                            let maxNumberOfSquaresToCheckLeft = Number(piece1File) - Number(piece2File) - 1;
                            if (piece1Rank - piece2Rank == 0) {
                                if (piece1File - piece2File > 0) {
                                    let destinationSquareRank = Number(piece2Rank);
                                    let destinationSquareFileTemp = Number(piece2File);
                                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                                    let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                    let firstSquareRank = Number(piece1Rank);
                                    let firstSquareFile = Number(piece1File) - 1;
                                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                                    counter = 0;
                                    let squaresCountedLeft = 0;
                                    //code added for Kings
                                    if ((piece1Name === "whiteKing") || (piece2Name === "blackKing")) {
                                        maxNumberOfSquaresToCheckUp = 0;
                                    }
                                    for (let i = 0; i <= maxNumberOfSquaresToCheckLeft; i++) {
                                        counter++;
                                        squaresCountedLeft++;
                                        let squareToCheckRank = Number(piece1Rank);
                                        let squareToCheckFile = Number(piece1File) - 1;
                                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckLeft != 0)) {
                                            //   add white to this square!!!!!  how?    and then call isCheckmate()
                                            squareToCheckDoc[0].classList.add("white");                                           
                                            if (!isCheckmate()) {
                                                //squareToCheckDoc[0].classList.remove("white");

                                                alert("returned false from checkIfCheckmate() 570");
                                                return false;
                                            }
                                            else {
                                                //squareToCheckDoc[0].classList.remove("white");

                                            }
                                            break;
                                        }
                                        //added code for Kings
                                        if (piece1Name === "whiteKing") {
                                            if (((Number(piece1File)) - destinationSquareFileTemp) > 1) {
                                                break;
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {
                                                //alert("You captured your blacks piece");

                                                if (!isCheckmate()) {
                                                    alert("returned false from checkIfCheckmate() 1050");

                                                    return false;
                                                }
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                //alert("You cant move your King there");
                                                break;
                                            }
                                            if (squareToCheckDoc[0].classList.length == emptySquare) {

                                                if (!isCheckmate()) {

                                                    alert("returned false from checkIfCheckmate() 1063");

                                                    return false;
                                                }
                                            }
                                        }

                                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                        if ((maxNumberOfSquaresToCheckLeft == 0) || (squaresCountedLeft == maxNumberOfSquaresToCheckLeft)) {
                                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                if (((player === "white") && (piece2Color === "white"))) {
                                                    break;
                                                } else {
                                                    if (player === "white") {

                                                        //squareToCheckDoc[0].classList.add("white");                                           

                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");


                                                            alert("returned false from checkIfCheckmate() 1104");

                                                            return false;
                                                        }
                                                        else {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                                        if (player === "white") {

                                            if (!isCheckmate()) { 
                                                alert("returned false from checkIfCheckmate() 1124");

                                                return false; }
                                        } else {
                                            if (player === "white") {
                                                //alert("in the final else statement in queen Left");

                                                // alert("You captured blacks piece");
                                                if (!isCheckmate()) { 
                                                    alert("returned false from checkIfCheckmate() 1133");

                                                    return false; }
                                            }
                                        }

                                    }
                                }
                            }

                            //going RIGHT
                            let maxNumberOfSquaresToCheckRight = Number(piece2File) - Number(piece1File) - 1;
                            if (piece1Rank - piece2Rank == 0) {
                                if (piece2File - piece1File > 0) {
                                    let destinationSquareRank = Number(piece2Rank);
                                    let destinationSquareFileTemp = Number(piece2File);
                                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                                    let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                    let firstSquareRank = Number(piece1Rank);
                                    let firstSquareFile = Number(piece1File) + 1;
                                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                                    counter = 0;
                                    let squaresCountedRight = 0;
                                    for (let i = 0; i <= maxNumberOfSquaresToCheckRight; i++) {
                                        counter++;
                                        squaresCountedRight++;
                                        //code added for Kings
                                        if ((piece1Name === "whiteKing")) {
                                            maxNumberOfSquaresToCheckUp = 0;
                                        }
                                        let squareToCheckRank = Number(piece1Rank);
                                        let squareToCheckFile = Number(piece1File) + 1;
                                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckRight != 0)) {
                                            //   add white to this square!!!!!  how?    and then call isCheckmate()
                                            squareToCheckDoc[0].classList.add("white");                                           
                                            if (!isCheckmate()) {
                                                //squareToCheckDoc[0].classList.remove("white");

                                                alert("returned false from checkIfCheckmate() 570");
                                                return false;
                                            }
                                            else {
                                                // squareToCheckDoc[0].classList.remove("white");

                                            }
                                            break;
                                        }
                                        //added code for Kings
                                        if (piece1Name === "whiteKing") {
                                            if ((destinationSquareFileTemp - (Number(piece1File))) > 1) {
                                                break;
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {
                                                // alert("You captured your blacks piece");

                                                if (!isCheckmate()) {

                                                    alert("returned false from checkIfCheckmate() 1202");

                                                    return false;
                                                }
                                            }
                                            if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                //alert("You cant move your King there");
                                                break;
                                            }
                                            if (squareToCheckDoc[0].classList.length == emptySquare) {

                                                if (!isCheckmate()) {
                                                    alert("returned false from checkIfCheckmate() 1212");

                                                    return false;
                                                }
                                            }
                                        }

                                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                        if ((maxNumberOfSquaresToCheckRight == 0) || (squaresCountedRight == maxNumberOfSquaresToCheckRight)) {
                                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                if (((player === "white") && (piece2Color === "white"))) {
                                                    break;
                                                } else {
                                                    if (player === "white") {
                                                        //squareToCheckDoc[0].classList.add("white");                                           

                                                        //alert("You captured blacks piece");
                                                        if (!isCheckmate()) {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                            alert("returned false from checkIfCheckmate() 1252");

                                                            return false;
                                                        }
                                                        else {
                                                            //squareToCheckDoc[0].classList.remove("white");

                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }
                                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                                        if (player === "white") {

                                            if (!isCheckmate()) { 
                                                alert("returned false from checkIfCheckmate() kings rooks queens1137");

                                                return false; }
                                        } else {
                                            if (player === "white") {
                                                //alert("in the final else statement in queen Right");

                                                //  alert("You captured blacks piece");
                                                if (!isCheckmate()) { 
                                                    alert("returned false from checkIfCheckmate() kings rooks queens1146");

                                                    return false; }
                                            }
                                        }

                                    }
                                }
                            }
                            //going UP/LEFT DIAGONAL
                            if ((piece1Name === "whiteQueen") || (piece1Name === "whiteKing")) {
                                let maxNumberOfSquaresToCheckUpLeft = Number(piece1File) - Number(piece2File) - 1;
                                if (piece1File - piece2File > 0) {
                                    if (piece2Rank - piece1Rank > 0) {
                                        if ((piece2Rank - piece1Rank) == (Number(piece1File) - Number(piece2File))) {
                                            let destinationSquareFileTemp = Number(piece2File);
                                            let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                            let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                            counter = 0;
                                            let squaresCountedUpLeft = 0;
                                            for (let i = 0; i <= maxNumberOfSquaresToCheckUpLeft; i++) {
                                                counter++;
                                                squaresCountedUpLeft++;
                                                if (piece1Name === ("whiteKing")) {
                                                    maxNumberOfSquaresToCheckUpLeft = 0;
                                                }
                                                let squareToCheckRank = Number(piece1Rank) + squaresCountedUpLeft;
                                                let squareToCheckFile = Number(piece1File) - squaresCountedUpLeft;
                                                let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                                if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpLeft != 0)) {
                                                    //   add white to this square!!!!!  how?    and then call isCheckmate()
                                                    squareToCheckDoc[0].classList.add("white");                                           
                                                    if (!isCheckmate()) {
                                                        //squareToCheckDoc[0].classList.remove("white");

                                                        alert("returned false from checkIfCheckmate() 570");
                                                        return false;
                                                    }
                                                    else {
                                                        //squareToCheckDoc[0].classList.remove("white");

                                                    }
                                                    break;
                                                }
                                                //added code for Kings
                                                if (piece1Name === "whiteKing") {
                                                    //alert("king got here???");
                                                    if (((piece2Rank - piece1Rank) > 1) && ((Number(piece1File)) - destinationSquareFileTemp) > 1) {
                                                        break;
                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {
                                                        //alert("You captured your blacks piece");

                                                        if (!isCheckmate()) {
                                                            alert("returned false from checkIfCheckmate() 1349");


                                                            return false;
                                                        }
                                                        else {
                                                            alert("DID NOT RETURN FALSE from checkIfCheckmate() 1349");



                                                        }

                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                        // alert("You cant move your King there");
                                                        break;
                                                    }
                                                    if (squareToCheckDoc[0].classList.length == emptySquare) {

                                                        if (!isCheckmate()) {
                                                            alert("returned false from checkIfCheckmate() 1360");

                                                            return false;
                                                        }
                                                    }
                                                }

                                                //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                                if ((maxNumberOfSquaresToCheckUpLeft == 0) || (squaresCountedUpLeft == maxNumberOfSquaresToCheckUpLeft)) {
                                                    if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                        if (((player === "white") && (piece2Color === "white"))) {
                                                            break;
                                                        } else {
                                                            if (player === "white") {
                                                                //squareToCheckDoc[0].classList.add("white");                                           

                                                                // alert("You captured blacks piece");
                                                                if (!isCheckmate()) {
                                                                    //squareToCheckDoc[0].classList.remove("white");

                                                                    alert("returned false from checkIfCheckmate() 1402");

                                                                    return false;
                                                                }
                                                                else {
                                                                    //squareToCheckDoc[0].classList.remove("white");

                                                                }
                                                            }

                                                        }
                                                    }
                                                }
                                            }
                                            //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                            if (destinationSquareDoc[0].classList.length == emptySquare) {
                                                if (player === "white") {
                                                    if (!isCheckmate()) {
                                                        alert("returned false from checkIfCheckmate() 891");
                                                        return false; }
                                                } else {
                                                    if (player === "white") {
                                                        //alert("in the final else statement in queen UP/right");

                                                        //alert("You captured blacks piece");
                                                        if (!isCheckmate()) { 

                                                            alert("returned false from checkIfCheckmate() 1433");

                                                            return false; }
                                                    }
                                                }                              
                                            }
                                        }
                                    }
                                }
                            }
                            //going UP/RIGHT
                            if ((piece1Name === "whiteQueen") || (piece1Name === "whiteKing")) {
                                let maxNumberOfSquaresToCheckUpRight = Number(piece2File) - Number(piece1File) - 1;
                                if (piece2File - piece1File > 0) {
                                    if (piece2Rank - piece1Rank > 0) {
                                        if ((piece2Rank - piece1Rank) == (Number(piece2File) - Number(piece1File))) {
                                            //let destinationSquareRank = Number(piece2Rank);
                                            let destinationSquareFile = Number(piece2File);
                                            let destinationSquare = "#square" + piece2Rank + Math.trunc(destinationSquareFile);
                                            let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                            let firstSquareRank = Number(piece1Rank) + 1;
                                            let firstSquareFile = Number(piece1File) + 1;
                                            counter = 0;
                                            let squaresCountedUpRight = 0;
                                            for (let i = 0; i <= maxNumberOfSquaresToCheckUpRight; i++) {
                                                counter++;
                                                squaresCountedUpRight++;
                                                if (piece1Name === ("whiteKing")) {
                                                    maxNumberOfSquaresToCheckUpRight = 0;
                                                }
                                                let squareToCheckRank = Number(piece1Rank) + squaresCountedUpRight;
                                                let squareToCheckFile = Number(piece1File) + squaresCountedUpRight;
                                                let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                                if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpRight != 0)) {
                                                    //   add white to this square!!!!!  how?    and then call isCheckmate()
                                                    squareToCheckDoc[0].classList.add("white");                                           
                                                    if (!isCheckmate()) {
                                                        //squareToCheckDoc[0].classList.remove("white");

                                                        alert("returned false from checkIfCheckmate() 570");
                                                        return false;
                                                    }
                                                    else {
                                                        // squareToCheckDoc[0].classList.remove("white");

                                                    }
                                                    break;
                                                }
                                                //added code for Kings
                                                if (piece1Name === "whiteKing") {
                                                    // alert("king got here???");
                                                    if ((piece2Rank - piece1Rank > 1) && (destinationSquareFile - (Number(piece1File)) > 1)) {
                                                        break;
                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {
                                                        // alert("You captured your blacks piece");

                                                        if (!isCheckmate()) {
                                                            alert("returned false from checkIfCheckmate() 947");

                                                            return false;
                                                        }
                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                        //alert("You cant move your King there");
                                                        break;
                                                    }
                                                    if (squareToCheckDoc[0].classList.length == emptySquare) {

                                                        if (!isCheckmate()) {
                                                            alert("returned false from checkIfCheckmate() 958");
                                                            return false;
                                                        }
                                                    }
                                                }

                                                //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                                if ((maxNumberOfSquaresToCheckUpRight == 0) || (squaresCountedUpRight == maxNumberOfSquaresToCheckUpRight)) {
                                                    if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                        if (((player === "white") && (piece2Color === "white"))) {
                                                            break;
                                                        } else {
                                                            if (player === "white") {
                                                                //squareToCheckDoc[0].classList.add("white");                                           


                                                                if (!isCheckmate()) {
                                                                    //squareToCheckDoc[0].classList.remove("white");

                                                                    return false;
                                                                }
                                                                else {
                                                                    // squareToCheckDoc[0].classList.remove("white");

                                                                }
                                                            }

                                                        }
                                                    }
                                                }
                                            }
                                            //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                            if (destinationSquareDoc[0].classList.length == emptySquare) {
                                                if (player === "white") {


                                                    if (!isCheckmate()) { return false; }
                                                } 
                                                if (destinationSquareDoc[0].classList.length == emptySquare) {

                                                } 
                                            }
                                        }
                                    }
                                }
                            }
                            //going DOWN/LEFT
                            if ((piece1Name === "whiteQueen") || (piece1Name === "whiteKing")) {
                                let maxNumberOfSquaresToCheckDownLeft = Number(piece1File) - Number(piece2File) - 1;
                                if (piece1File - piece2File > 0) {
                                    if (piece1Rank - piece2Rank > 0) {
                                        if ((piece1Rank - piece2Rank) == (Number(piece1File) - Number(piece2File))) {
                                            let destinationSquareRank = Number(piece2Rank);
                                            let destinationSquareFileTemp = Number(piece2File);
                                            let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                                            let destinationSquare = "#square" + piece2Rank + Math.trunc(piece2File);
                                            let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                            let firstSquareRank = Number(piece1Rank) - 1;
                                            let firstSquareFile = Number(piece1File) - 1;
                                            let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                            let firstSquareDoc = document.querySelectorAll(firstSquare);
                                            counter = 0;
                                            let squaresCountedDownLeft = 0;
                                            for (let i = 0; i <= maxNumberOfSquaresToCheckDownLeft; i++) {
                                                counter++;
                                                squaresCountedDownLeft++;
                                                if (piece1Name === ("whiteKing")) {
                                                    maxNumberOfSquaresToCheckDownLeft = 0;
                                                }
                                                let squareToCheckRank = Number(piece1Rank) - squaresCountedDownLeft;
                                                let squareToCheckFile = Number(piece1File) - squaresCountedDownLeft;
                                                let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                                if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownLeft != 0)) {
                                                    //   add white to this square!!!!!  how?    and then call isCheckmate()
                                                    squareToCheckDoc[0].classList.add("white");                                           
                                                    if (!isCheckmate()) {
                                                        //squareToCheckDoc[0].classList.remove("white");

                                                        alert("returned false from checkIfCheckmate() 570");
                                                        return false;
                                                    }
                                                    else {
                                                        //squareToCheckDoc[0].classList.remove("white");

                                                    }
                                                    break;
                                                }
                                                //added code for Kings
                                                if (piece1Name === "whiteKing") {
                                                    if ((piece1Rank - piece2Rank > 1) && ((Number(piece1File)) - destinationSquareFileTemp) > 1) {
                                                        break;
                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {
                                                        if (!isCheckmate()) { return false; }
                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                        break;
                                                    }
                                                    if (squareToCheckDoc[0].classList.length == emptySquare) {
                                                        if (!isCheckmate()) { return false; }
                                                    }
                                                }
                                                //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                                if ((maxNumberOfSquaresToCheckDownLeft == 0) || (squaresCountedDownLeft == maxNumberOfSquaresToCheckDownLeft)) {
                                                    if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                        if ((player === "white") && (piece2Color === "white")) {
                                                            break;
                                                        } else {
                                                            if (player === "white") {
                                                                //squareToCheckDoc[0].classList.add("white");                                           


                                                                if (!isCheckmate()) {
                                                                    //squareToCheckDoc[0].classList.remove("white");

                                                                    return false;
                                                                }
                                                                else {
                                                                    // squareToCheckDoc[0].classList.remove("white");

                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                            if (destinationSquareDoc[0].classList.length == emptySquare) {
                                                if (player === "white") {

                                                    if (!isCheckmate()) { return false; }
                                                }                                                  
                                            }
                                        }
                                    }
                                }
                            }
                            //going DOWN/RIGHT
                            if ((piece1Name === "whiteQueen") || (piece1Name === "whiteKing")) {
                                let maxNumberOfSquaresToCheckDownRight = Number(piece2File) - Number(piece1File) - 1;
                                if (piece2File - piece1File > 0) {
                                    if (piece1Rank - piece2Rank > 0) {
                                        if ((piece1Rank - piece2Rank) == (Number(piece2File) - Number(piece1File))) {
                                            let destinationSquareFile = Number(piece2File);
                                            let destinationSquare = "#square" + piece2Rank + Math.trunc(destinationSquareFile);
                                            let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                                            let firstSquareRank = Number(piece1Rank) + 1;
                                            let firstSquareFile = Number(piece1File) + 1;
                                            let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                                            let firstSquareDoc = document.querySelectorAll(firstSquare);
                                            counter = 0;
                                            let squaresCountedDownRight = 0;
                                            for (let i = 0; i <= maxNumberOfSquaresToCheckDownRight; i++) {
                                                counter++;
                                                squaresCountedDownRight++;
                                                if (piece1Name === "whiteKing") {
                                                    maxNumberOfSquaresToCheckDownRight = 0;
                                                }
                                                let squareToCheckRank = Number(piece1Rank) - squaresCountedDownRight;
                                                let squareToCheckFile = Number(piece1File) + squaresCountedDownRight;
                                                let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                                                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                                                if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownRight != 0)) {
                                                    //   add white to this square!!!!!  how?    and then call isCheckmate()
                                                    squareToCheckDoc[0].classList.add("white");                                           
                                                    if (!isCheckmate()) {
                                                        //squareToCheckDoc[0].classList.remove("white");

                                                        alert("returned false from checkIfCheckmate() 570");
                                                        return false;
                                                    }
                                                    else {
                                                        //squareToCheckDoc[0].classList.remove("white");

                                                    }
                                                    break;
                                                }
                                                if (piece1Name === "whiteKing") {
                                                    if ((piece1Rank - piece2Rank > 1) && (destinationSquareFile - (Number(piece1File)) > 1)) {
                                                        break;
                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "black")) {

                                                        if (!isCheckmate()) { return false; }
                                                    }
                                                    if ((squareToCheckDoc[0].classList.length != emptySquare) && (piece2Color === "white")) {
                                                        break;
                                                    }
                                                    if (squareToCheckDoc[0].classList.length == emptySquare) {

                                                        if (!isCheckmate()) { return false; }
                                                    }
                                                }
                                                //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                                                if ((maxNumberOfSquaresToCheckDownRight == 0) || (squaresCountedDownRight == maxNumberOfSquaresToCheckDownRight)) {
                                                    if (((player === "white") && (piece2Color === "white"))) {
                                                        break;
                                                    } else {
                                                        if (player === "white") {
                                                            //squareToCheckDoc[0].classList.add("white");                                           


                                                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                                            }
                                                            if (!isCheckmate()) {
                                                                //squareToCheckDoc[0].classList.remove("white");

                                                                return false;
                                                            }
                                                            else {
                                                                // squareToCheckDoc[0].classList.remove("white");

                                                            }
                                                        }

                                                    }
                                                }
                                            }
                                        }
                                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                                        if (destinationSquareDoc[0].classList.length == emptySquare) {
                                            if (player === "white") {
                                                if (!isCheckmate()) { return false; }
                                            }                                          
                                        }
                                    }
                                }
                            }
                        }


                    }


                }
            }
        }
    }
    alert("got here after going through all possible moves. loooks like its gonna be checkmate");
    return true;
}





