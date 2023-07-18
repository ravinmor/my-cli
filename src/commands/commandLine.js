import Command from "./Command.js";

class commandLine extends Command {
    setup(vorpal) {
        vorpal
            .command('foo', 'Outputs "bar".')
            .action(function(args, callback) {
                this.log('bar');
                callback();
            });
    }
}

export default new commandLine();