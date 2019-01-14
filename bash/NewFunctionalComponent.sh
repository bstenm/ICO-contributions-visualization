#!/bin/bash
from=`pwd`/templates/Component
dest=$(dirname `pwd`)/src/components
clear
echo "Component name:"
read name
mkdir $dest/$name
chmod 775 $dest/$name
cp -R $from/. $dest/$name/
cd $dest/$name
mv "Component.css" "$name.css"
mv "Component.js" "$name.js"

for file in bash.t NewComponent.sh NewFunctionalComponent.sh NewFunctionalComponent.sh.t templates
do
while read a ;
do
str=${a//CurrencySelection/$name} ;
echo $str
done < $file > $file.t ;
mv $file{.t,}
done
