function RunSimulation(startDust, SetToUse) {
    var LegendaryLeft;
    var EpicSingleLeft;
    var EpicDoubleLeft;
    var RareSingleLeft;
    var RareDoubleLeft;
    var CommonSingleLeft;
    var CommonDoubleLeft;

    var TtlLegendary;
    var TtlEpic;
    var TtlRare;
    var TtlCommon;

    if (SetToUse == 1) {
        LegendaryLeft = ColLegendaryLeft;
        EpicSingleLeft = ColEpicSingleLeft;
        EpicDoubleLeft = ColEpicDoubleLeft;
        RareSingleLeft = ColRareSingleLeft;
        RareDoubleLeft = ColRareDoubleLeft;
        CommonSingleLeft = ColCommonSingleLeft;
        CommonDoubleLeft = ColCommonDoubleLeft;

        TtlLegendary = TotalLegendary;
        TtlEpic = TotalEpic;
        TtlRare = TotalRare;
        TtlCommon = TotalCommon;
    } else if (SetToUse == 2) {
        LegendaryLeft = GvGLegendaryLeft;
        EpicSingleLeft = GvGEpicSingleLeft;
        EpicDoubleLeft = GvGEpicDoubleLeft;
        RareSingleLeft = GvGRareSingleLeft;
        RareDoubleLeft = GvGRareDoubleLeft;
        CommonSingleLeft = GvGCommonSingleLeft;
        CommonDoubleLeft = GvGCommonDoubleLeft;

        TtlLegendary = TotalLegendaryGvG;
        TtlEpic = TotalEpicGvG;
        TtlRare = TotalRareGvG;
        TtlCommon = TotalCommonGvG;
    } else if (SetToUse == 3) {
        LegendaryLeft = GrTLegendaryLeft;
        EpicSingleLeft = GrTEpicSingleLeft;
        EpicDoubleLeft = GrTEpicDoubleLeft;
        RareSingleLeft = GrTRareSingleLeft;
        RareDoubleLeft = GrTRareDoubleLeft;
        CommonSingleLeft = GrTCommonSingleLeft;
        CommonDoubleLeft = GrTCommonDoubleLeft;

        TtlLegendary = TotalLegendaryGrT;
        TtlEpic = TotalEpicGrT;
        TtlRare = TotalRareGrT;
        TtlCommon = TotalCommonGrT;
    }


    var DustToComplete = LegendaryLeft * DustPerLegendary;
    DustToComplete += (EpicSingleLeft + EpicDoubleLeft * 2) * DustPerEpic;
    DustToComplete += (RareSingleLeft + RareDoubleLeft * 2) * DustPerRare;
    DustToComplete += (CommonSingleLeft + CommonDoubleLeft * 2) * DustPerCommon;
    var DustOnHand = 0;  // Todo - Populate
    DustOnHand = parseInt(startDust);
    if (isNaN(DustOnHand)) {
        DustOnHand = 0;
    }
    var CardsDrawn = 0;

    while (DustToComplete > DustOnHand) {
        CardsDrawn++;

        var newCard = Math.random();
        var GoldRoll = Math.random();
        var indCard;

        if (newCard < ChanceLegendary) {
            // Legendary Draw
            indCard = Math.random() * TtlLegendary;

            if (indCard < LegendaryLeft) {
                LegendaryLeft--;
            }
            else {
                if (GoldRoll < ChanceGold) {
                    DustOnHand += 1600;
                }
                else {
                    DustOnHand += 400;
                }
            }
        }
        else if (newCard < ChanceLegendary + ChanceEpic) {
            // Epic Draw
            indCard = Math.random() * TtlEpic;

            if (indCard < EpicSingleLeft) {
                EpicSingleLeft--;
            }
            else if (indCard < EpicSingleLeft + EpicDoubleLeft) {
                EpicDoubleLeft--;
                EpicSingleLeft++;
            }
            else {
                if (GoldRoll < ChanceGold) {
                    DustOnHand += 400;
                }
                else {
                    DustOnHand += 100;
                }
            }
        }
        else if (newCard < ChanceLegendary + ChanceEpic + ChanceRare) {
            // Rare Draw
            indCard = Math.random() * TtlRare;

            if (indCard < RareSingleLeft) {
                RareSingleLeft--;
            }
            else if (indCard < RareSingleLeft + RareDoubleLeft) {
                RareDoubleLeft--;
                RareSingleLeft++;
            }
            else {
                if (GoldRoll < ChanceGold) {
                    DustOnHand += 100;
                }
                else {
                    DustOnHand += 20;
                }
            }
        }
        else {
            // Common Draw
            indCard = Math.random() * TtlCommon;

            if (indCard < CommonSingleLeft) {
                CommonSingleLeft--;
            }
            else if (indCard < CommonSingleLeft + CommonDoubleLeft) {
                CommonDoubleLeft--;
                CommonSingleLeft++;
            }
            else {
                if (GoldRoll < 0.02) {
                    DustOnHand += 50;
                }
                else {
                    DustOnHand += 5;
                }
            }
        }

        // Update Dust to Complete
        DustToComplete = LegendaryLeft * DustPerLegendary;
        DustToComplete += (EpicSingleLeft + EpicDoubleLeft * 2) * DustPerEpic;
        DustToComplete += (RareSingleLeft + RareDoubleLeft * 2) * DustPerRare;
        DustToComplete += (CommonSingleLeft + CommonDoubleLeft * 2) * DustPerCommon;
    }
    return CardsDrawn;
}


function RunCombinedSimulation(startDust) {
    //var LegendaryLeft;
    //var EpicSingleLeft;
    //var EpicDoubleLeft;
    //var RareSingleLeft;
    //var RareDoubleLeft;
    //var CommonSingleLeft;
    //var CommonDoubleLeft;

    var ClLegendaryLeft = ColLegendaryLeft;
    var ClEpicSingleLeft = ColEpicSingleLeft;
    var ClEpicDoubleLeft = ColEpicDoubleLeft;
    var ClRareSingleLeft = ColRareSingleLeft;
    var ClRareDoubleLeft = ColRareDoubleLeft;
    var ClCommonSingleLeft = ColCommonSingleLeft;
    var ClCommonDoubleLeft = ColCommonDoubleLeft;
    var GvLegendaryLeft = GvGLegendaryLeft;
    var GvEpicSingleLeft = GvGEpicSingleLeft;
    var GvEpicDoubleLeft = GvGEpicDoubleLeft;
    var GvRareSingleLeft = GvGRareSingleLeft;
    var GvRareDoubleLeft = GvGRareDoubleLeft;
    var GvCommonSingleLeft = GvGCommonSingleLeft;
    var GvCommonDoubleLeft = GvGCommonDoubleLeft;
    var GTLegendaryLeft = GrTLegendaryLeft;
    var GTEpicSingleLeft = GrTEpicSingleLeft;
    var GTEpicDoubleLeft = GrTEpicDoubleLeft;
    var GTRareSingleLeft = GrTRareSingleLeft;
    var GTRareDoubleLeft = GrTRareDoubleLeft;
    var GTCommonSingleLeft = GrTCommonSingleLeft;
    var GTCommonDoubleLeft = GrTCommonDoubleLeft;


    var DustToComplete = (ClLegendaryLeft + GvLegendaryLeft + GTLegendaryLeft) * DustPerLegendary;
    DustToComplete += (ClEpicSingleLeft + ClEpicDoubleLeft * 2 + GvEpicSingleLeft + GvEpicDoubleLeft * 2 + GTEpicSingleLeft + GTEpicDoubleLeft * 2) * DustPerEpic;
    DustToComplete += (ClRareSingleLeft + ClRareDoubleLeft * 2 + GvRareSingleLeft + GvRareDoubleLeft * 2 + GTRareSingleLeft + GTRareDoubleLeft * 2) * DustPerRare;
    DustToComplete += (ClCommonSingleLeft + ClCommonDoubleLeft * 2 + GvCommonSingleLeft + GvCommonDoubleLeft * 2 + GTCommonSingleLeft + GTCommonDoubleLeft * 2) * DustPerCommon;
    var DustOnHand = 0;
    DustOnHand = parseInt(startDust);
    if (isNaN(DustOnHand)) {
        DustOnHand = 0;
    }
    var CardsDrawn = 0;

    while (DustToComplete > DustOnHand) {
        CardsDrawn++;

        var newCard = Math.random();
        var GoldRoll = Math.random();
        var indCard;

        var ValCN = DustPerCommon;
        var ValCD = 50 * 0.02 + 5 * 0.98;
        var ValRN = DustPerRare;
        var ValRD = 100 * 0.05 + 20 * 0.95;
        var ValEN = DustPerEpic;
        var ValED = 400 * 0.05 + 100 * 0.95;
        var ValLN = DustPerLegendary;
        var ValLD = 1600 * 0.05 + 400 * 0.95;

        var ProbCNgt = (GTCommonSingleLeft + GTCommonDoubleLeft) / TotalCommonGrT;
        var ProbRNgt = (GTRareSingleLeft + GTRareDoubleLeft) / TotalRareGrT;
        var ProbENgt = (GTEpicSingleLeft + GTEpicDoubleLeft) / TotalEpicGrT;
        var ProbLNgt = GTLegendaryLeft / TotalLegendaryGrT;

        var ProbCNgvg = (GvCommonSingleLeft + GvCommonDoubleLeft) / TotalCommonGvG;
        var ProbRNgvg = (GvRareSingleLeft + GvRareDoubleLeft) / TotalRareGvG;
        var ProbENgvg = (GvEpicSingleLeft + GvEpicDoubleLeft) / TotalEpicGvG;
        var ProbLNgvg = GvLegendaryLeft / TotalLegendaryGvG;

        var ProbCN = (ClCommonSingleLeft + ClCommonDoubleLeft) / TotalCommon;
        var ProbRN = (ClRareSingleLeft + ClRareDoubleLeft) / TotalRare;
        var ProbEN = (ClEpicSingleLeft + ClEpicDoubleLeft) / TotalEpic;
        var ProbLN = ClLegendaryLeft / TotalLegendary;

        var EVExpert = (ProbCN * ValCN + (1 - ProbCN) * ValCD) * (1 - ChanceRare - ChanceEpic - ChanceLegendary);
        EVExpert = EVExpert + (ProbRN * ValRN + (1 - ProbRN) * ValRD) * ChanceRare;
        EVExpert = EVExpert + (ProbEN * ValEN + (1 - ProbEN) * ValED) * ChanceEpic;
        EVExpert = EVExpert + (ProbLN * ValLN + (1 - ProbLN) * ValLD) * ChanceLegendary;

        var EVGvG = (ProbCNgvg * ValCN + (1 - ProbCNgvg) * ValCD) * (1 - ChanceRare - ChanceEpic - ChanceLegendary);
        EVGvG = EVGvG + (ProbRNgvg * ValRN + (1 - ProbRNgvg) * ValRD) * ChanceRare;
        EVGvG = EVGvG + (ProbENgvg * ValEN + (1 - ProbENgvg) * ValED) * ChanceEpic;
        EVGvG = EVGvG + (ProbLNgvg * ValLN + (1 - ProbLNgvg) * ValLD) * ChanceLegendary;

        var EVGrT = (ProbCNgt * ValCN + (1 - ProbCNgt) * ValCD) * (1 - ChanceRare - ChanceEpic - ChanceLegendary);
        EVGrT = EVGrT + (ProbRNgt * ValRN + (1 - ProbRNgt) * ValRD) * ChanceRare;
        EVGrT = EVGrT + (ProbENgt * ValEN + (1 - ProbENgt) * ValED) * ChanceEpic;
        EVGrT = EVGrT + (ProbLNgt * ValLN + (1 - ProbLNgt) * ValLD) * ChanceLegendary;

        if (EVExpert >= Math.max(EVExpert, EVGrT, EVGvG)) {
            // Draw Expert Card
            if (newCard < ChanceLegendary) {
                // Legendary Draw
                indCard = Math.random() * TotalLegendary;

                if (indCard < ClLegendaryLeft) {
                    ClLegendaryLeft--;
                }
                else {
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 1600;
                    }
                    else {
                        DustOnHand += 400;
                    }
                }
            }
            else if (newCard < ChanceLegendary + ChanceEpic) {
                // Epic Draw
                indCard = Math.random() * TotalEpic;

                if (indCard < ClEpicSingleLeft) {
                    ClEpicSingleLeft--;
                }
                else if (indCard < ClEpicSingleLeft + ClEpicDoubleLeft) {
                    ClEpicDoubleLeft--;
                    ClEpicSingleLeft++;
                }
                else {
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 400;
                    }
                    else {
                        DustOnHand += 100;
                    }
                }
            }
            else if (newCard < ChanceLegendary + ChanceEpic + ChanceRare) {
                // Rare Draw
                indCard = Math.random() * TotalRare;

                if (indCard < ClRareSingleLeft) {
                    ClRareSingleLeft--;
                }
                else if (indCard < ClRareSingleLeft + ClRareDoubleLeft) {
                    ClRareDoubleLeft--;
                    ClRareSingleLeft++;
                }
                else {
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 100;
                    }
                    else {
                        DustOnHand += 20;
                    }
                }
            }
            else {
                // Common Draw
                indCard = Math.random() * TotalCommon;

                if (indCard < ClCommonSingleLeft) {
                    ClCommonSingleLeft--;
                }
                else if (indCard < ClCommonSingleLeft + ClCommonDoubleLeft) {
                    ClCommonDoubleLeft--;
                    ClCommonSingleLeft++;
                }
                else {
                    if (GoldRoll < 0.02) {
                        DustOnHand += 50;
                    }
                    else {
                        DustOnHand += 5;
                    }
                }
            }
        } else if (EVGrT >= Math.max(EVExpert, EVGrT, EVGvG)) {
            // DRAW GrT CARD
            if (newCard < ChanceLegendary) {
                // Legendary Draw
                indCard = Math.random() * TotalLegendaryGrT;

                if (indCard < GTLegendaryLeft) {
                    GTLegendaryLeft--;
                }
                else {
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 1600;
                    }
                    else {
                        DustOnHand += 400;
                    }
                }
            }
            else if (newCard < ChanceLegendary + ChanceEpic) {
                // Epic Draw
                indCard = Math.random() * TotalEpicGrT;

                if (indCard < GTEpicSingleLeft) {
                    GTEpicSingleLeft--;
                }
                else if (indCard < GTEpicSingleLeft + GTEpicDoubleLeft) {
                    GTEpicDoubleLeft--;
                    GTEpicSingleLeft++;
                }
                else {
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 400;
                    }
                    else {
                        DustOnHand += 100;
                    }
                }
            }
            else if (newCard < ChanceLegendary + ChanceEpic + ChanceRare) {
                // Rare Draw
                indCard = Math.random() * TotalRareGrT;

                if (indCard < GTRareSingleLeft) {
                    GTRareSingleLeft--;
                }
                else if (indCard < GTRareSingleLeft + GTRareDoubleLeft) {
                    GTRareDoubleLeft--;
                    GTRareSingleLeft++;
                }
                else {
                    // This line is causing problems
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 100;
                    }
                    else {
                        DustOnHand += 20;
                    }
                }
            }
            else {
                // Common Draw
                indCard = Math.random() * TotalCommonGrT;

                if (indCard < GTCommonSingleLeft) {
                    GTCommonSingleLeft--;
                }
                else if (indCard < GTCommonSingleLeft + GTCommonDoubleLeft) {
                    GTCommonDoubleLeft--;
                    GTCommonSingleLeft++;
                }
                else {
                    if (GoldRoll < 0.02) {
                        DustOnHand += 50;
                    }
                    else {
                        DustOnHand += 5;
                    }
                }
            }
        } else {
            // DRAW GvG CARD
            if (newCard < ChanceLegendary) {
                // Legendary Draw
                indCard = Math.random() * TotalLegendaryGvG;

                if (indCard < GTLegendaryLeft) {
                    GTLegendaryLeft--;
                }
                else {
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 1600;
                    }
                    else {
                        DustOnHand += 400;
                    }
                }
            }
            else if (newCard < ChanceLegendary + ChanceEpic) {
                // Epic Draw
                indCard = Math.random() * TotalEpicGvG;

                if (indCard < GvEpicSingleLeft) {
                    GvEpicSingleLeft--;
                }
                else if (indCard < GvEpicSingleLeft + GvEpicDoubleLeft) {
                    GvEpicDoubleLeft--;
                    GvEpicSingleLeft++;
                }
                else {
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 400;
                    }
                    else {
                        DustOnHand += 100;
                    }
                }
            }
            else if (newCard < ChanceLegendary + ChanceEpic + ChanceRare) {
                // Rare Draw
                indCard = Math.random() * TotalRareGvG;

                if (indCard < GvRareSingleLeft) {
                    GvRareSingleLeft--;
                }
                else if (indCard < GvRareSingleLeft + GvRareDoubleLeft) {
                    GvRareDoubleLeft--;
                    GvRareSingleLeft++;
                }
                else {
                    // This line is causing problems
                    if (GoldRoll < ChanceGold) {
                        DustOnHand += 100;
                    }
                    else {
                        DustOnHand += 20;
                    }
                }
            }
            else {
                // Common Draw
                indCard = Math.random() * TotalCommonGvG;

                if (indCard < GvCommonSingleLeft) {
                    GvCommonSingleLeft--;
                }
                else if (indCard < GvCommonSingleLeft + GvCommonDoubleLeft) {
                    GvCommonDoubleLeft--;
                    GvCommonSingleLeft++;
                }
                else {
                    if (GoldRoll < 0.02) {
                        DustOnHand += 50;
                    }
                    else {
                        DustOnHand += 5;
                    }
                }
            }
        }

        // Update Dust to Complete
        DustToComplete = (ClLegendaryLeft + GvLegendaryLeft + GTLegendaryLeft) * DustPerLegendary;
        DustToComplete += (ClEpicSingleLeft + ClEpicDoubleLeft * 2 + GvEpicSingleLeft + GvEpicDoubleLeft * 2 + GTEpicSingleLeft + GTEpicDoubleLeft * 2) * DustPerEpic;
        DustToComplete += (ClRareSingleLeft + ClRareDoubleLeft * 2 + GvRareSingleLeft + GvRareDoubleLeft * 2 + GTRareSingleLeft + GTRareDoubleLeft * 2) * DustPerRare;
        DustToComplete += (ClCommonSingleLeft + ClCommonDoubleLeft * 2 + GvCommonSingleLeft + GvCommonDoubleLeft * 2 + GTCommonSingleLeft + GTCommonDoubleLeft * 2) * DustPerCommon;
    }
    return CardsDrawn;
}


function GenerateNewLink() {
    ColLegendaryLeft = 0;
    ColEpicSingleLeft = 0;
    ColEpicDoubleLeft = 0;
    ColRareSingleLeft = 0;
    ColRareDoubleLeft = 0;
    ColCommonSingleLeft = 0;
    ColCommonDoubleLeft = 0;

    GvGLegendaryLeft = 0;
    GvGEpicSingleLeft = 0;
    GvGEpicDoubleLeft = 0;
    GvGRareSingleLeft = 0;
    GvGRareDoubleLeft = 0;
    GvGCommonSingleLeft = 0;
    GvGCommonDoubleLeft = 0;

    GrTLegendaryLeft = 0;
    GrTEpicSingleLeft = 0;
    GrTEpicDoubleLeft = 0;
    GrTRareSingleLeft = 0;
    GrTRareDoubleLeft = 0;
    GrTCommonSingleLeft = 0;
    GrTCommonDoubleLeft = 0;

    var CreatedLink = "http://localhost:55289/?Collection=";
    //CreatedLink = "http://carddust.azurewebsites.net/?Collection="; // Deployed
    CreatedLink = "http://www.carddust.com/?Collection="; // Deployed with domain

    for (var i = 1; i <= CardCount; i++) {
        var cardsCollected = 0;
        var chkBoxToCheck = document.getElementById('Chk1ID_' + i);
        if (chkBoxToCheck.checked) {
            cardsCollected++;
        }
        if (arrCards[i] < 4) {
            var chkBoxToCheck = document.getElementById('Chk2ID_' + i);
            if (chkBoxToCheck.checked) {
                cardsCollected++;
            }
        }
        if (setCards[i] == 1) {
            if (arrCards[i] == 1) {
                if (cardsCollected == 1) {
                    ColCommonSingleLeft++;
                } else if (cardsCollected == 0) {
                    ColCommonDoubleLeft++;
                }
            } else if (arrCards[i] == 2) {
                if (cardsCollected == 1) {
                    ColRareSingleLeft++;
                } else if (cardsCollected == 0) {
                    ColRareDoubleLeft++;
                }
            } else if (arrCards[i] == 3) {
                if (cardsCollected == 1) {
                    ColEpicSingleLeft++;
                } else if (cardsCollected == 0) {
                    ColEpicDoubleLeft++;
                }
            } else {
                if (cardsCollected == 0) {
                    ColLegendaryLeft++;
                }
            }
        } else if (setCards[i] == 2) {
            if (arrCards[i] == 1) {
                if (cardsCollected == 1) {
                    GvGCommonSingleLeft++;
                } else if (cardsCollected == 0) {
                    GvGCommonDoubleLeft++;
                }
            } else if (arrCards[i] == 2) {
                if (cardsCollected == 1) {
                    GvGRareSingleLeft++;
                } else {
                    if (cardsCollected < 1) {
                        GvGRareDoubleLeft++;
                    }
                }
            } else if (arrCards[i] == 3) {
                if (cardsCollected == 1) {
                    GvGEpicSingleLeft++;
                } else if (cardsCollected == 0) {
                    GvGEpicDoubleLeft++;
                }
            } else {
                if (cardsCollected == 0) {
                    GvGLegendaryLeft++;
                }
            }
        } else if (setCards[i] == 4) {
            if (arrCards[i] == 1) {
                if (cardsCollected == 1) {
                    GrTCommonSingleLeft++;
                } else if (cardsCollected == 0) {
                    GrTCommonDoubleLeft++;
                }
            } else if (arrCards[i] == 2) {
                if (cardsCollected == 1) {
                    GrTRareSingleLeft++;
                } else {
                    if (cardsCollected < 1) {
                        GrTRareDoubleLeft++;
                    }
                }
            } else if (arrCards[i] == 3) {
                if (cardsCollected == 1) {
                    GrTEpicSingleLeft++;
                } else if (cardsCollected == 0) {
                    GrTEpicDoubleLeft++;
                }
            } else {
                if (cardsCollected == 0) {
                    GrTLegendaryLeft++;
                }
            }
        }
        CreatedLink += cardsCollected;
    }
    var DustToComplete = ColLegendaryLeft * DustPerLegendary;
    DustToComplete += (ColEpicSingleLeft + ColEpicDoubleLeft * 2) * DustPerEpic;
    DustToComplete += (ColRareSingleLeft + ColRareDoubleLeft * 2) * DustPerRare;
    DustToComplete += (ColCommonSingleLeft + ColCommonDoubleLeft * 2) * DustPerCommon;

    var TextBoxToEdit = document.getElementById('needLegend');
    TextBoxToEdit.value = ColLegendaryLeft;

    TextBoxToEdit = document.getElementById('needEpic');
    TextBoxToEdit.value = ColEpicSingleLeft + '/' + ColEpicDoubleLeft;

    TextBoxToEdit = document.getElementById('needRare');
    TextBoxToEdit.value = ColRareSingleLeft + '/' + ColRareDoubleLeft;

    TextBoxToEdit = document.getElementById('needCommon');
    TextBoxToEdit.value = ColCommonSingleLeft + '/' + ColCommonDoubleLeft;

    TextBoxToEdit = document.getElementById('needDust');
    TextBoxToEdit.value = DustToComplete;

    var GvGDustToComplete = GvGLegendaryLeft * DustPerLegendary;
    GvGDustToComplete += (GvGEpicSingleLeft + GvGEpicDoubleLeft * 2) * DustPerEpic;
    GvGDustToComplete += (GvGRareSingleLeft + GvGRareDoubleLeft * 2) * DustPerRare;
    GvGDustToComplete += (GvGCommonSingleLeft + GvGCommonDoubleLeft * 2) * DustPerCommon;

    TextBoxToEdit = document.getElementById('needLegendGvG');
    TextBoxToEdit.value = GvGLegendaryLeft;

    TextBoxToEdit = document.getElementById('needEpicGvG');
    TextBoxToEdit.value = GvGEpicSingleLeft + '/' + GvGEpicDoubleLeft;

    TextBoxToEdit = document.getElementById('needRareGvG');
    TextBoxToEdit.value = GvGRareSingleLeft + '/' + GvGRareDoubleLeft;

    TextBoxToEdit = document.getElementById('needCommonGvG');
    TextBoxToEdit.value = GvGCommonSingleLeft + '/' + GvGCommonDoubleLeft;

    TextBoxToEdit = document.getElementById('needDustGvG');
    TextBoxToEdit.value = GvGDustToComplete;

    var GrTDustToComplete = GrTLegendaryLeft * DustPerLegendary;
    GrTDustToComplete += (GrTEpicSingleLeft + GrTEpicDoubleLeft * 2) * DustPerEpic;
    GrTDustToComplete += (GrTRareSingleLeft + GrTRareDoubleLeft * 2) * DustPerRare;
    GrTDustToComplete += (GrTCommonSingleLeft + GrTCommonDoubleLeft * 2) * DustPerCommon;

    TextBoxToEdit = document.getElementById('needLegendGrT');
    TextBoxToEdit.value = GrTLegendaryLeft;

    TextBoxToEdit = document.getElementById('needEpicGrT');
    TextBoxToEdit.value = GrTEpicSingleLeft + '/' + GrTEpicDoubleLeft;

    TextBoxToEdit = document.getElementById('needRareGrT');
    TextBoxToEdit.value = GrTRareSingleLeft + '/' + GrTRareDoubleLeft;

    TextBoxToEdit = document.getElementById('needCommonGrT');
    TextBoxToEdit.value = GrTCommonSingleLeft + '/' + GrTCommonDoubleLeft;

    TextBoxToEdit = document.getElementById('needDustGrT');
    TextBoxToEdit.value = GrTDustToComplete;

    TextBoxToEdit = document.getElementById('optPack');
    var PackChoice = OptimalPack();
    if (PackChoice == 1) {
        TextBoxToEdit.value = 'Classic';
    } else if (PackChoice == 2) {
        TextBoxToEdit.value = 'GvG';
    } else if (PackChoice == 3) {
        TextBoxToEdit.value = 'Grand Tournament';
    }

    return CreatedLink;
}


function OptimalPack() {
    var ValCN = DustPerCommon;
    var ValCD = 50 * 0.02 + 5 * 0.98;
    var ValRN = DustPerRare;
    var ValRD = 100 * 0.05 + 20 * 0.95;
    var ValEN = DustPerEpic;
    var ValED = 400 * 0.05 + 100 * 0.95;
    var ValLN = DustPerLegendary;
    var ValLD = 1600 * 0.05 + 400 * 0.95;

    var ProbCNgt = (GrTCommonSingleLeft + GrTCommonDoubleLeft) / TotalCommonGrT;
    var ProbRNgt = (GrTRareSingleLeft + GrTRareDoubleLeft) / TotalRareGrT;
    var ProbENgt = (GrTEpicSingleLeft + GrTEpicDoubleLeft) / TotalEpicGrT;
    var ProbLNgt = GrTLegendaryLeft / TotalLegendaryGrT;

    var ProbCNgvg = (GvGCommonSingleLeft + GvGCommonDoubleLeft) / TotalCommonGvG;
    var ProbRNgvg = (GvGRareSingleLeft + GvGRareDoubleLeft) / TotalRareGvG;
    var ProbENgvg = (GvGEpicSingleLeft + GvGEpicDoubleLeft) / TotalEpicGvG;
    var ProbLNgvg = GvGLegendaryLeft / TotalLegendaryGvG;

    var ProbCN = (ColCommonSingleLeft + ColCommonDoubleLeft) / TotalCommon;
    var ProbRN = (ColRareSingleLeft + ColRareDoubleLeft) / TotalRare;
    var ProbEN = (ColEpicSingleLeft + ColEpicDoubleLeft) / TotalEpic;
    var ProbLN = ColLegendaryLeft / TotalLegendary;

    var EVExpert = (ProbCN * ValCN + (1 - ProbCN) * ValCD) * (1 - ChanceRare - ChanceEpic - ChanceLegendary);
    EVExpert = EVExpert + (ProbRN * ValRN + (1 - ProbRN) * ValRD) * ChanceRare;
    EVExpert = EVExpert + (ProbEN * ValEN + (1 - ProbEN) * ValED) * ChanceEpic;
    EVExpert = EVExpert + (ProbLN * ValLN + (1 - ProbLN) * ValLD) * ChanceLegendary;

    var EVGvG = (ProbCNgvg * ValCN + (1 - ProbCNgvg) * ValCD) * (1 - ChanceRare - ChanceEpic - ChanceLegendary);
    EVGvG = EVGvG + (ProbRNgvg * ValRN + (1 - ProbRNgvg) * ValRD) * ChanceRare;
    EVGvG = EVGvG + (ProbENgvg * ValEN + (1 - ProbENgvg) * ValED) * ChanceEpic;
    EVGvG = EVGvG + (ProbLNgvg * ValLN + (1 - ProbLNgvg) * ValLD) * ChanceLegendary;

    var EVGrT = (ProbCNgt * ValCN + (1 - ProbCNgt) * ValCD) * (1 - ChanceRare - ChanceEpic - ChanceLegendary);
    EVGrT = EVGrT + (ProbRNgt * ValRN + (1 - ProbRNgt) * ValRD) * ChanceRare;
    EVGrT = EVGrT + (ProbENgt * ValEN + (1 - ProbENgt) * ValED) * ChanceEpic;
    EVGrT = EVGrT + (ProbLNgt * ValLN + (1 - ProbLNgt) * ValLD) * ChanceLegendary;

    if (EVExpert >= Math.max(EVExpert, EVGrT, EVGvG)) {
        //console.log('GVG');
        return 1;
    } else if (EVGrT >= Math.max(EVExpert, EVGrT, EVGvG)) {
        //console.log('Classic');
        return 3;
    } else {
        return 2;
    }
}

function ChangeAllChecks(rarity, set, toCheck) {
    //alert('rarity is' + rarity);
    //alert('set is' + set);
    //alert('toCheck is ' + toCheck);
    //arrCards[CardCount] = '@eachCard.RarityId';
    //setCards[CardCount] = '@eachCard.SetID';
    var newValue;
    if (toCheck == 'true') {
        newValue = true;
    } else {
        newValue = false;
    }
    var ElementToChange;
    for (var i = 1; i <= CardCount; i++) {
        if ((arrCards[i] == rarity) || (rarity == '-1')) {
            if ((setCards[i] == set) || (set == '-1')) {
                ElementToChange = document.getElementById('Chk1ID_' + i);
                ElementToChange.checked = newValue;
                if (arrCards[i] < 4) {
                    ElementToChange = document.getElementById('Chk2ID_' + i);
                    ElementToChange.checked = newValue;
                }
            }
        }
    }
    //GenerateNewLink();
}
