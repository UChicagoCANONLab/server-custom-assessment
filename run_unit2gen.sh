#!/bin/bash

#Run with ./run_unit2gen.sh timestamp

#Go into timestamp folder
cd $1

#Change permissions on Question Generator
chmod +x unit2QuestionGenerator.py

infoFile="$1.csv"

#Run question generator
python unit2QuestionGenerator.py $infoFile

#Read csv of students
IFS=","
while read f1 f2 f3 f4
do
        #Delete unnecessary files
        rm "$f3".json
        rm "$f3"_jsonString.txt
        
        #plug in picture generator here
        
        #mkdir "$f3"_images
        #mv *.png "$f3"_images
        
        #Generate pdfs
        pdflatex "$f3"_test.tex

done < $infoFile

#Get rid of extra files
rm *.aux
rm *.log

#Merge all the pdfs
pdfunite *.pdf all_tests.pdf

#Get rid of all pdfs
rm *_test.tex
rm *_test.pdf
