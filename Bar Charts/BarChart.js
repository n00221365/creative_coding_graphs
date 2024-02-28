//creates sets of data that will be manipulated in the sketch file
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
//allows drawing on the canvas
    render(){
       
        //creates a checkpoint in your code
        push ();

        //translate redefines where the 0 point is
        translate (this.xPos,this.yPos);

         //BAR CHART TITLE
         textSize(50);
         fill(255);
        noStroke()
         text(this.title, 0,-this.chartHeight - 60);
 
         //X AXIS TITLE
 
         textSize(40);
         textAlign(CENTER)
         fill(255);
         text(this.xAxisTitle, this.chartWidth/2,380)
         //Y AXIS TITLE
         push()
         textSize(40);
         fill(255);
         textAlign(CENTER, CENTER)
        translate (-100,-this.chartHeight/2)
        rotate (90);
         text(this.yAxisTitle,0,0);
         
         //returns to the most recent instance of push 
        pop();
 
        stroke(this.axisLineColour)
        strokeWeight(5)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);
        

        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
        //this is an arrow function, a more concise way of writing functions
        let labels = this.data.map(d => d[this.xValue]);
        let scale = this.chartHeight / max(this.data.map(d => d[this.yValue]));
      

        // THis draws the horizontal elements
        push()
        translate(gap,0);
        for(let i=0; i<this.data.length; i++){
            fill(64,181,240);
            rect (0,0,this.barWidth, -this.data[i][this.yValue]*scale);


            textSize(40)
           
            noStroke();
            fill(255, 249, 165);
            textAlign(LEFT, CENTER);

            push();
            translate(this.barWidth/2,10);
            textSize(25)
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
                    textSize(25)
           
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