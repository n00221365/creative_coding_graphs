//what does turning values to obj mean (in BarChart class)
//what does the "i" in the for loop do

class BarChart{
    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;

        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;
    }

    render(){
       
        push ();
        translate (this.xPos,this.yPos);

         //BAR CHART TITLE
         textSize(30);
         fill(255);
        noStroke()
         text(this.title, 0,-this.chartHeight - 60);
 
         //X AXIS TITLE
 
         textSize(20);
         textAlign(CENTER)
         fill(255);
         text(this.xAxisTitle, this.chartWidth/2,185)
         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(CENTER, CENTER)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,0);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
        let labels = this.data.map(d => d[this.xValue]);
        let scale = this.chartHeight / max(this.data.map(d => d[this.yValue]));
      

        // THis draws the horizontal elements
        push()
        translate(gap,0);
        for(let i=0; i<this.data.length; i++){
            fill(91, 192, 190);
            rect (0,0,this.barWidth, -this.data[i][this.yValue]*scale);


            textSize(10)
           
            noStroke();
            fill(255, 249, 165);
            textAlign(LEFT, CENTER);

            push();
            translate(this.barWidth/2,10);
            rotate (45)
            text(labels[i],0,0);
            pop()


            translate(gap+this.barWidth,0)
            
        }
        pop()
                // THis draws the vertical elements
            let tickGap = this.chartHeight/5;
            let tickValue =  max(this.data.map(d => d[this.yValue])) /5
                for(let i=0; i<=5; i++){
                    stroke("#fff")
                    line(0,-i*tickGap,-20,-i*tickGap);
                    textSize(10)
           
                    noStroke();
                    fill(255, 249, 165);
                    textAlign(RIGHT,BOTTOM);
        
                    push();
                    translate(this.barWidth/2,10);
                    rotate (45)
                    pop()
                
                    text(round(tickValue*i),0,-i*tickGap)
                    ;
                }

        pop ();
    }
}

class HorizontalBarChart{
    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;

        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;
    }

    render(){
       
        push ();
        translate (this.xPos,this.yPos);

         //BAR CHART TITLE
         textSize(30);
         fill(255);
        noStroke()
        textAlign(CENTER);
         text(this.title, this.chartWidth / 2,-350);
 
         //X AXIS TITLE
 
         textSize(20);
         textAlign(CENTER)
         fill(255);
         text(this.xAxisTitle, this.chartWidth/2,185)
         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(CENTER, CENTER)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,0);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartHeight - (this.data.length))/(this.data.length +28);
        let labels = this.data.map(d => d[this.yValue]);
        let scale = this.chartWidth / max(this.data.map(d => d[this.xValue]));
      

         // THis draws the horizontal elements
         push()
         translate(0,-this.chartHeight);
         for(let i=0; i<this.data.length; i++){
             fill(91, 192, 190);
             rect (0,i * gap, this.data[i][this.xValue]*scale,this.barWidth);
 
 
             textSize(10)
            
             noStroke();
             fill(255, 249, 165);
             textAlign( RIGHT, CENTER);
             
 
             push();
             translate(this.barHeight);
             text(labels[i],0,gap +9);
             pop()
 
 
             translate(0,gap+this.barWidth)
             
         }
         pop()
                 // THis draws the vertical elements
             let tickGap = this.chartWidth/5;
             let tickValue =  max(this.data.map(d => d[this.xValue])) /5
 
             
                 for(let i=0; i<=5; i++){
                     stroke("#fff")
                     line(i*tickGap,0,i*tickGap,20);
                     textSize(10)
            
                     noStroke();
                     fill(255, 249, 165);
                     textAlign(CENTER);
                     
         
                     push();
                     translate(this.barWidth/2,10);
                     rotate (45)
                     pop()
                     text(round(tickValue*i),i*tickGap,40)
                     ;

                 }
 
         pop ();
     }
 }

 class StackedBarChart{

    
    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;
        this.total = obj.total;
        this.data = obj.data;

        this.bottomYValue = obj.bottomYValue;
        this.topYValue = obj.topYValue;
        this.xValue = obj.xValue;

        this.bottomValueTitle=obj.bottomValueTitle;
        this.topValueTitle=obj.topValueTitle;

        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;

    //     let totals = 0;
    //    for(let i=0; i<this.data.length; i++){
    //   totals = int(this.data[i][this.topYValue] + this.data[i][this.bottomYValue]);
       
    //    }
    //    console.log(totals)
    // let maxTotal = max(totals)
    // console.log(maxTotal)
    }

    render(){
       
        push ();
        translate (this.xPos,this.yPos);

        //Legend
       // fill(173, 216, 230);
       // rect(this.chartWidth + 50,this.chartHeight +50,this.barWidth,this.barWidth);
        //text(this.bottomValueTitle, this.chartWidth +70, this.chartHeight +50);
      // pop();

         //BAR CHART TITLE
         textSize(30);
         fill(255);
        noStroke()
         text(this.title, 0,-this.chartHeight - 60);
 
         //X AXIS TITLE
 
         textSize(20);
         textAlign(CENTER)
         fill(255);
         text(this.xAxisTitle, this.chartWidth/2,185)
         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(CENTER, CENTER)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,0);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

    //    let totals = [];
    //    for(let i=0; i<this.data.length; i++){
    //   let  total = this.data[i][this.topYValue] + this.data[i][this.bottomYValue];
    //    totals.push(total);
    //    }
    //    console.log()

       let topMaxValue = max(this.data.map(d => d[this.topYValue]))
       let bottomMaxValue = max(this.data.map(d => d[this.bottomYValue]))
       let totalMaxValue = (topMaxValue + bottomMaxValue)
        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
        let labels = this.data.map(d => d[this.xValue]);
        //let total = this.bottomYValue + this.topYValue;
        let scale = this.chartHeight / totalMaxValue;

        console.log(totalMaxValue);
      

        // THis draws the horizontal elements
        push()
        translate(gap,0);


    print( this.data);
        for(let i=0; i<this.data.length; i++){
            push();
            fill(64,181,240);
            rect (0,0,this.barWidth, -this.data[i][this.bottomYValue]*scale);
            translate(0,-this.data[i][this.bottomYValue]*scale)
            fill(255,192,203)
            rect (0,0,this.barWidth, -this.data[i][this.bottomYValue,this.topYValue]*scale);
            pop();
            textSize(10)
            noStroke();
            fill(255, 249, 165);
            textAlign(LEFT, CENTER);
            push();
            translate(this.barWidth/2,10);
            rotate (45)
            text(labels[i],0,0);
            pop()
            translate(gap+this.barWidth,0)
            
        }
console.log(totalMaxValue)

        let sumTop = 0;
        let sumBottom= 0;
        for(let i=0; i<this.data.length;i++){
            sumTop += int(this.data[i].VALUE2019);
            sumBottom += int(this.data[i].VALUE2018);
        };
        let sumTotal= sumTop + sumBottom;
        console.log(sumTotal);


        let averageLine = sumTotal / this.data.length;
        stroke(255,0,0);
        line(0,-averageLine,-this.chartWidth,-averageLine)
        pop()
                // THis draws the vertical elements
            let tickGap = this.chartHeight/5;
                for(let i=0; i<=5; i++){
                    let tickNum =  totalMaxValue /5;
                    let tickValue = tickNum * i;
                    
                    stroke("#fff")
                    line(0,-i*tickGap,-20,-i*tickGap);
                    textSize(10)
                    noStroke();
                    fill(255, 249, 165);
                    textAlign(RIGHT,BOTTOM);
                    push();
                    translate(this.barWidth/2,10);
                    rotate (45)
                    pop()
                
                    text(round(tickValue),0,-i*tickGap)
                    ;
                }
        pop ();  
    }
}

class HorStacked{

    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;
        this.total = obj.total;
        this.data = obj.data;
        this.bottomXValue = obj.bottomXValue;
        this.topXValue = obj.topXValue;
        this.yValue = obj.yValue;
        this.bottomValueTitle=obj.bottomValueTitle;
        this.topValueTitle=obj.topValueTitle;
        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;
    }

    render(){
       
        push ();
        translate (this.xPos,this.yPos);

         //BAR CHART TITLE
         textSize(30);
         fill(255);
        noStroke()
         text(this.title, 0,-this.chartHeight - 60);
 
         //X AXIS TITLE
 
         textSize(20);
         textAlign(LEFT)
         fill(255);
         text(this.xAxisTitle, this.chartWidth/2,185)
         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(LEFT)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,0);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

       let topMaxValue = max(this.data.map(d => d[this.topXValue]))
       let bottomMaxValue = max(this.data.map(d => d[this.bottomXValue]))
       let totalMaxValue = (topMaxValue + bottomMaxValue)
        let gap = 20;
        let labels = this.data.map(d => d[this.yValue]);
        //let total = this.bottomYValue + this.topYValue;
        let scale = this.chartWidth / (max(this.data.map(d => d[this.bottomXValue])) + max(this.data.map(d => d[this.topXValue])));

        console.log(totalMaxValue);
      

        // THis draws the horizontal elements
        push()
        translate(0,-this.chartHeight);

        for(let i=0; i<this.data.length; i++){
            fill(64,181,240);
            rect (0,gap,this.data[i][this.bottomXValue]*scale,this.barWidth);

            push()
            translate(this.data[i][this.bottomXValue]*scale,0)
            fill(255,192,203)
            rect (0,gap, this.data[i][this.topXValue]*scale,this.barWidth);
            pop()

            push();
            translate(0,-gap);
            textSize(10)
            noStroke();
            fill(255, 249, 165);
            textAlign(LEFT);
            text(labels[i],0,gap+this.barWidth);
            pop()

            translate(0,gap+this.barWidth)
            
        }

        let sumTop = 0;
        let sumBottom= 0;
        for(let i=0; i<this.data.length;i++){
            sumTop += int(this.data[i].MALEVALUE);
            sumBottom += int(this.data[i].FEMALEVALUE);
        };
        let sumTotal= sumTop + sumBottom;
        console.log(sumTotal);


        let averageLine = sumTotal ;
        stroke(255,0,0);
        line(averageLine,-this.chartHeight+90,averageLine,0)
        pop()
                // THis draws the vertical elements
            let tickGap = this.chartHeight/5;
            let tickValue =  max(this.data.map(d => d[this.total]));
                for(let i=0; i<=5; i++){
                    stroke("#fff")
                    line(i*tickGap,0,i*tickGap,20);
                    textSize(10)
           
                    noStroke();
                    fill(255, 249, 165);
                    textAlign(LEFT,BOTTOM);
        
                    push();
                    translate(this.barWidth/2,10);
                    rotate (45)
                    pop()
                
                    text(round(tickValue*i),i*tickGap,40)
                    ;
                }
        pop (); 
    }
}

class AgeChartRight{
    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;

        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;
    }

    render(){
        push ();
        translate (this.xPos,this.yPos);

         //BAR CHART TITLE
         textSize(30);
         fill(255);
        noStroke()
        textAlign(CENTER);
         text(this.title, this.chartWidth / 15,-250);
 
         //X AXIS TITLE
 
         textSize(20);
         textAlign(CENTER)
         fill(255);
         text(this.xAxisTitle, 50,100)
         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(CENTER, CENTER)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,this.chartWidth,0);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartHeight - (this.data.length))/(this.data.length +28);
        let labels = this.data.map(d => d[this.yValue]);
        let scale = this.chartWidth / max(this.data.map(d => d[this.xValue]));
      

         // THis draws the horizontal elements
         push()
         translate(0,-this.chartHeight);
         for(let i=0; i<this.data.length; i++){
             fill(255,0,0);
             rect (0,i * gap-20, this.data[i][this.xValue]*scale,this.barWidth);
 
 
             textSize(10)
            
             noStroke();
             fill(255, 249, 165);
             textAlign( RIGHT, CENTER);
             
 
             push();
             translate(this.barHeight);
             text(labels[i],0,gap +9);
             pop()
 
 
             translate(0,gap+this.barWidth)
             
         }
         pop()
                 // THis draws the vertical elements
             let tickGap = this.chartWidth/5;
             let tickValue =  max(this.data.map(d => d[this.xValue])) /5
 
             
                 for(let i=0; i<=5; i++){
                     stroke("#fff")
                     line(i*tickGap,0,i*tickGap,20);
                     textSize(10)
            
                     noStroke();
                     fill(255, 249, 165);
                     textAlign(CENTER);
                     
         
                     push();
                     translate(this.barWidth/2,10);
                     rotate (45)
                     pop()
                     text(round(tickValue*i),i*tickGap,40)
                     ;

                 }
 
         pop ();
     }
 }

 class AgeChartLeft{
    constructor(obj){
        this.title = obj.title;
        this.yAxisTitle = obj.yAxisTitle;
        this.xAxisTitle = obj.xAxisTitle;

        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.labelPadding = obj.labelPadding;
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.barWidth = obj.barWidth;
    }

    render(){
       
        push ();
        translate (this.xPos,this.yPos);

         //BAR CHART TITLE
         textSize(30);
         fill(255);
        noStroke()
        textAlign(CENTER);
 
         //X AXIS TITLE
 
         textSize(20);
         textAlign(CENTER)
         fill(255);
         text(this.xAxisTitle, this.chartWidth-this.chartWidth -30,100)

         //Y AXIS TITLE
         push()
         textSize(20);
         fill(255);
         textAlign(CENTER, CENTER)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         
        pop();
 
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        let gap = (this.chartHeight - (this.data.length))/(this.data.length +28);
        let labels = this.data.map(d => d[this.yValue]);
        let scale = this.chartWidth / max(this.data.map(d => d[this.xValue]));
      

         // THis draws the horizontal elements
         push()
         translate(0,-this.chartHeight);
         for(let i=0; i<this.data.length; i++){
             fill(0,0,255);
             rect (0,i * gap -20, -this.data[i][this.xValue]*scale,this.barWidth);
 
 
             textSize(10)
            
             noStroke();
             fill(255, 249, 165);
             textAlign( RIGHT, CENTER);
 
 
             translate(0,gap+this.barWidth)
             
         }
         
         pop()
                 // THis draws the vertical elements
             let tickGap = this.chartWidth/5;
             let tickValue =  max(this.data.map(d => d[this.xValue])) *5
 
             
                 for(let i=0; i<=5; i++){
                     stroke("#fff")
                     line(i*-tickGap,5,i*-tickGap,20);
                     textSize(10)
            
                     noStroke();
                     fill(255, 249, 165);
                     textAlign(CENTER);
                     
         
                     push();
                     translate(this.barWidth/2,10);
                     rotate (45)
                     pop()
                     text(round(tickValue*-i),-i*tickGap,40)
                     ;

                 }
 
         pop ();
     }
 }