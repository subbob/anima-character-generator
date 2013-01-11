/*global define: false */
define(['tables'], function (tables) {
    return {
        'Absorption of Energy': {MK: 30, Requirements: ['Use of Ki', 'Presence Extrusion']},
        'Age Control': {MK: 20, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion']},
        'Arcane Magnitude': {MK: 40, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion', 'Multiplication of Bodies', 'Magnitude']},
        'Arcane Multiplication of Bodies': {MK: 40, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion', 'Multiplication of Bodies', 'Greater Multiplication of Bodies']},
        'Armor of Arcane Energy': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion', 'Energy Armor', 'Armor of Greater Energy']},
        'Armor of Emptiness': {MK: 20, Requirements: ['Use of Nemesis']},
        'Armor of Greater Energy': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion', 'Energy Armor']},
        'Aura Extension': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion']},
        'Aura of Concealment': {MK: 10, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Ki Concealment']},
        'Aura of Emptiness': {MK: 30, Requirements: ['Use of Nemesis']},
        'Binding Cancellation': {MK: 30, Requirements: ['Use of Nemesis']},
        'Body of Emptiness': {MK: 10, Requirements: ['Use of Nemesis']},
        'Characteristic Augmentation': {MK: 20, Requirements: ['Use of Ki', 'Use of Necessary Energy']},
        'Combat Aura': {MK: 40, Requirements: ['Use of Ki', 'Ki Control']},
        'Destruction By Ki': {MK: 20, Requirements: ['Use of Ki', 'Presence Extrusion']},
        'Elemental Attack': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion', 'Aura Extension'],
            Options: tables.elements, Option_Title: 'Select an element'},
        'Elemental Immunity: Cold': {MK: 20, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Elimination of Necessities']},
        'Elemental Immunity: Electricity': {MK: 20, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Elimination of Necessities']},
        'Elemental Immunity: Fire': {MK: 20, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Elimination of Necessities']},
        'Elimination of Necessities': {MK: 10, Requirements: ['Use of Ki', 'Use of Necessary Energy']},
        'Emptiness Extrusion': {MK: 30, Requirements: ['Use of Nemesis']},
        'Energy Armor': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion']},
        'Erudition': {MK: 10, Requirements: ['Use of Ki', 'Ki Control', 'Ki Detection']},
        'Essence of Emptiness': {MK: 20, Requirements: ['Use of Nemesis', 'Body of Emptiness']},
        'False Death': {MK: 10, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Ki Concealment']},
        'Flight': {MK: 20, Requirements: ['Use of Ki', 'Weight Elimination', 'Levitation']},
        'Form of Emptiness': {MK: 30, Requirements: ['Use of Nemesis', 'Body of Emptiness', 'Emptiness Extrusion']},
        'Greater Ki Cancellation': {MK: 20, Requirements: ['Use of Nemesis', 'Ki Cancellation']},
        'Greater Magic Cancellation': {MK: 20, Requirements: ['Use of Nemesis', 'Magic Cancellation']},
        'Greater Matrices Cancellation': {MK: 20, Requirements: ['Use of Nemesis', 'Matrices Cancellation']},
        'Greater Multiplication of Bodies': {MK: 30, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion', 'Multiplication of Bodies']},
        'Improvised Combat Techniques': {MK: 50, Requirements: ['Use of Ki']},
        'Increased Damage': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion', 'Aura Extension']},
        'Increased Reach': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion', 'Aura Extension']},
        'Increased Speed': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion', 'Aura Extension']},
        'Inhuman (Nemesis)': {MK: 20, Requirements: ['Use of Nemesis']},
        'Inhumanity': {MK: 30, Requirements: ['Use of Ki']},
        'Ki Cancellation': {MK: 30, Requirements: ['Use of Nemesis']},
        'Ki Concealment': {MK: 10, Requirements: ['Use of Ki', 'Use of Necessary Energy']},
        'Ki Control': {MK: 30, Requirements: ['Use of Ki']},
        'Ki Detection': {MK: 20, Requirements: ['Use of Ki', 'Ki Control']},
        'Ki Healing': {MK: 10, Requirements: ['Use of Ki', 'Ki Transmission']},
        'Ki Transmission': {MK: 10, Requirements: ['Use of Ki']},
        'Levitation': {MK: 20, Requirements: ['Use of Ki', 'Weight Elimination']},
        'Life Sacrifice': {MK: 10, Requirements: ['Use of Ki', 'Ki Transmission']},
        'Magic Cancellation': {MK: 30, Requirements: ['Use of Nemesis']},
        'Magnitude': {MK: 30, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion', 'Multiplication of Bodies']},
        'Mass Movement': {MK: 20, Requirements: ['Use of Ki', 'Weight Elimination', 'Levitation', 'Object Motion']},
        'Matrices Cancellation': {MK: 30, Requirements: ['Use of Nemesis']},
        'Movement of Emptiness': {MK: 20, Requirements: ['Use of Nemesis', 'Body of Emptiness']},
        'Multiplication of Bodies': {MK: 30, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion']},
        'No Needs': {MK: 10, Requirements: ['Use of Nemesis', 'Body of Emptiness']},
        'Noht': {MK: 30, Requirements: ['Use of Nemesis']},
        'Object Motion': {MK: 10, Requirements: ['Use of Ki', 'Weight Elimination', 'Levitation']},
        'One with the Nothing': {MK: 40, Requirements: ['Use of Nemesis', 'Body of Emptiness']},
        'Penalty Reduction': {MK: 20, Requirements: ['Use of Ki', 'Use of Necessary Energy']},
        'Physical Change': {MK: 30, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion']},
        'Physical Dominion': {MK: 10, Requirements: ['Use of Ki', 'Ki Control']},
        'Physical Shield': {MK: 10, Requirements: ['Use of Ki', 'Presence Extrusion']},
        'Presence Extrusion': {MK: 10, Requirements: ['Use of Ki']},
        'Recovery': {MK: 20, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Penalty Reduction']},
        'Restore Others': {MK: 10, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Penalty Reduction', 'Recovery']},
        'Stabilize': {MK: 10, Requirements: ['Use of Ki', 'Ki Transmission', 'Ki Healing']},
        'Superior Change': {MK: 20, Requirements: ['Use of Ki', 'Ki Control', 'Physical Dominion', 'Physical Change']},
        'Superior Characteristic Augmentation': {MK: 20, Requirements: ['Use of Ki', 'Use of Necessary Energy', 'Characteristic Augmentation']},
        'Superior Healing': {MK: 10, Requirements: ['Use of Ki', 'Ki Transmission', 'Ki Healing']},
        'Technique Imitation': {MK: 50, Requirements: ['Use of Ki', 'Ki Control']},
        'Technique Pushing': {MK: 20, Requirements: ['Use of Ki']},
        'Undetectable': {MK: 10, Requirements: ['Use of Nemesis']},
        'Use of Ki': {MK: 40},
        'Use of Necessary Energy': {MK: 10, Requirements: ['Use of Ki']},
        'Use of Nemesis': {MK: 70},
        'Weight Elimination': {MK: 10, Requirements: ['Use of Ki']},
        'Zen': {MK: 50, Requirements: ['Use of Ki', 'Inhumanity']},
        'Zen (Nemesis)': {MK: 40, Requirements: ['Use of Nemesis', 'Inhuman (Nemesis)']}
    };
});