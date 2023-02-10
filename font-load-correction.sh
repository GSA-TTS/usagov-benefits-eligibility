#!/bin/bash

if [[  \"${BRANCH}\" == \"main\" ]] ; 
then 
    echo \"true\"; 
else 
    echo \"false\";  
fi