begin
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new('spec:integration', :tag) do |t, task_args|
	  if task_args.tag
    		t.rspec_opts = "--tag integration:#{task_args[:tag]}"
	  else
    		t.rspec_opts = "--tag integration"
	  end
  end
rescue LoadError
  # no rspec available
end
