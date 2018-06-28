define( ["qlik", "text!./template.html", "./lib/js/math"],
	function ( qlik, template, math ) {

		return {
			template: template,
			initialProperties: {
				qHyperCubeDef: {
					qMode:"S",
					qAlwaysFullyExpanded:true,
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [{
						qWidth: 2,
						qHeight: 1000
					}]
				}
			},			
			definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions",
						min: 1,
						max: 1
					},
					measures: {
						uses: "measures",
						min: 1,
						max: 1
					},
					
					settings: {
						uses: "settings",
						items:{
							TitleColor:{
								type:"string",
								label:"Title Color",
								ref: "titleColor",
								expression:"never",
								defaultValue:"black"								
							},
							ValueColor:{
								type:"string",
								label:"Value Color",
								ref: "valueColor",
								expression:"never",
								defaultValue:"orange"								
							},
							FontSize:{
								type:"string",
								label:"Font Size (px)",
								ref: "fontSize",
								expression:"never",
								defaultValue:"18"								
							},
							/*DecimalPrecision:{
								type:"string",
								label:"Decimal Precision",
								ref: "decimalPrecision",
								expression:"never",
								defaultValue:"1"								
							},*/
							LineHeight:{
								type:"string",
								label:"Line Height",
								ref: "lineHeight",
								expression:"never",
								defaultValue:"2"								
							},
							LineBackground:{
								type:"string",
								label:"Line Background",
								ref: "linebgColor",
								expression:"never",
								defaultValue:"#d5f7b7"								
							},
							LineMargin:{
								type:"string",
								label:"Line Margin (px)",
								ref: "lineMargin",
								expression:"never",
								defaultValue:"2"								
							},
							Orientation:{
								type: "string",
								component: "dropdown",
								label: "Orientation",
								ref: "orientation",
								options: [{value:'1',label:'Vertical'},{value:'0',label:'Horizontal'}],
								defaultValue:'1'
							},
							Show:{
								component: "items",
								label: "Metric Display Options",
								items:{
									SampleCount:{
										type: "boolean",
										component: "switch",
										label: "Show Sample Count",
										ref: "sampleCount",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									Sum:{
										type: "boolean",
										component: "switch",
										label: "Show Sum",
										ref: "Sum",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									Mean:{
										type: "boolean",
										component: "switch",
										label: "Show Mean",
										ref: "Mean",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									Median:{
										type: "boolean",
										component: "switch",
										label: "Show Median",
										ref: "Median",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									Mode:{
										type: "boolean",
										component: "switch",
										label: "Show Mode",
										ref: "Mode",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									Min:{
										type: "boolean",
										component: "switch",
										label: "Show Minimum Value",
										ref: "Min",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									Max:{
										type: "boolean",
										component: "switch",
										label: "Show Max",
										ref: "Max",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									StandardDeviation:{
										type: "boolean",
										component: "switch",
										label: "Show Standard Deviation",
										ref: "stdDev",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									},
									Variance:{
										type: "boolean",
										component: "switch",
										label: "Show Variance",
										ref: "Variance",
										options: [{
											value: true,
											label: "Yes"
										}, {
											value: false,
											label: "No"
										}],
										defaultValue: true					
									}
								
								}
							}
							
							
						}
					}
					
					,
					
					sorting: {
						uses: "sorting"
					}
				}
			},
			
					
			support: {
				snapshot: true,
				export: true,
				exportData: false
			},
			paint: function () {
				var d=this.$scope.layout.qHyperCube.qDataPages[0].qMatrix;
				var statArray=[];
				for (var i=0; i<d.length;i++)
				{
					statArray.push(d[i][1].qNum);
				}
				this.$scope.titleColor= this.$scope.layout.titleColor? this.$scope.layout.titleColor: "black";
				this.$scope.valueColor=this.$scope.layout.valueColor? this.$scope.layout.valueColor:"black";
				this.$scope.titleFontSize=this.$scope.layout.fontSize? this.$scope.layout.fontSize:"20";
				this.$scope.valueFontSize=this.$scope.layout.fontSize? this.$scope.layout.fontSize:"20";
				this.$scope.measureTitle=this.$scope.layout.qHyperCube.qMeasureInfo[0].qFallbackTitle;
				this.$scope.dimTitle=this.$scope.layout.qHyperCube.qDimensionInfo[0].qFallbackTitle;
				this.$scope.lineHeight= this.$scope.layout.lineHeight;
				this.$scope.lineBackground= this.$scope.layout.linebgColor;
				this.$scope.lineMargin=this.$scope.layout.lineMargin;
				this.$scope.orientation=this.$scope.layout.orientation;
				
				var decimalPrecision=this.$scope.layout.decimalPrecision? this.$scope.layout.decimalPrecision:"1";
				var tot = Math.round((math.sum(statArray)*10*(decimalPrecision)))/(10*decimalPrecision);
				var mean = Math.round(math.mean(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var median= Math.round(math.median(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var mode = Math.round(math.mode(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var min = Math.round(math.min(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var max = Math.round(math.max(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var stdev=Math.round(math.std(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				var variance = Math.round(math.var(statArray)*10*decimalPrecision)/(10*decimalPrecision);
				this.$scope.summary_items=[];
				this.$scope.sampleCount=this.$scope.layout.sampleCount==null? true:this.$scope.layout.sampleCount;
				this.$scope.Sum=this.$scope.layout.Sum==null? true:this.$scope.layout.Sum;
				this.$scope.Mean=this.$scope.layout.Mean==null? true:this.$scope.layout.Mean;
				this.$scope.Median=this.$scope.layout.Median==null? true:this.$scope.layout.Median;
				this.$scope.Mode=this.$scope.layout.Mode==null? true:this.$scope.layout.Mode;
				this.$scope.Min=this.$scope.layout.Min==null? true:this.$scope.layout.Min;
				this.$scope.Max=this.$scope.layout.Max==null? true:this.$scope.layout.Max;
				this.$scope.stdDev=this.$scope.layout.stdDev==null? true:this.$scope.layout.stdDev;
				this.$scope.Variancec=this.$scope.layout.Variance==null? true:this.$scope.layout.Variance;
				
				
				
				if( this.$scope.sampleCount) this.$scope.summary_items.push({"display":"Sample count", "value":d.length});
				if( this.$scope.Sum)this.$scope.summary_items.push({"display": "Sum", "value":tot});
				if( this.$scope.Mean)this.$scope.summary_items.push({"display": "Mean", "value":mean});
				if( this.$scope.Median)this.$scope.summary_items.push({"display": "Median", "value":median});
				if( this.$scope.Mode)this.$scope.summary_items.push({"display": "Mode", "value":mode});
				if( this.$scope.Min)this.$scope.summary_items.push({"display": "Min", "value":min});
				if( this.$scope.Max)this.$scope.summary_items.push({"display": "Max", "value":max});
				if( this.$scope.stdDev)this.$scope.summary_items.push({"display": "Standard deviation", "value":stdev});
				if( this.$scope.Variance)this.$scope.summary_items.push({"display": "Variance", "value":variance});
				
				
				return qlik.Promise.resolve();
			},
			controller: ['$scope', function ( $scope ) {
				//add your rendering code here
				$scope.html = "Hello World";
				$scope.summary_items=[];
				$scope.orientation="V"
			}]
		};

	} );

