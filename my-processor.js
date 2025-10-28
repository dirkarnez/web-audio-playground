class MyProcessor extends AudioWorkletProcessor {
    constructor() {
        super();

        console.log(this.sampleRate);
        // this.sampleRate = 44100; // Example sample rate
    }

    process(inputs, outputs, parameters) {
        const output = outputs[0]; // typically one output only

        // typically output.length is 2. left and right, stereo
        for (let channel = 0; channel < output.length; ++channel) {
            const outputChannel = output[channel];
            for (let i = 0; i < outputChannel.length; ++i) {
                outputChannel[i] = Math.random(); // Generate random noise
            }
        }
        return true; // Keep the processor alive
    }
}

// Register the processor
registerProcessor('my-processor', MyProcessor);
